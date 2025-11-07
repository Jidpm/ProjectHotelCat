import createHttpError from "http-errors"
import bcrypt from 'bcryptjs'
import { loginSchema, registerSchema } from "../Validations/Schema.js"
import { createUser, getMe, getUserBy } from "../Services/user.service.js"
import  jwt  from "jsonwebtoken"

export const register = async (req, res, next)=>{
    const { identity, phoneNumber, email, firstName, lastName, password, confirmPassword } = req.body
    
    //validation
    const user = registerSchema.parse(req.body)
    
    //Check Identity
    const identityKey = user.email ? 'email' : 'phoneNumber'
    if (!identityKey) {
    return next(createHttpError[400]('identity must be email or phone number')) 
  }
    //Check User are already registered
    const haveUser = await getUserBy(identityKey,identity) //!! 
    // console.log('haveUser', haveUser)
    if (haveUser) {
    return next(createHttpError[409]('This user already register')) //!!
  }
  const newUser = {...user, password: await bcrypt.hash(password, 10)}
  const result = await createUser(newUser)
    res.json({
        message: "Register Successful",
        result: result
    })
}

export const login = async(req, res, next)=>{
    const {identity, password} = req.body

    //validate
    const user = loginSchema.parse(req.body)

    const identityKey = user.email? "email" : "phoneNumber"

    const foundUser = await getUserBy(identityKey, identity)
    //not found user
    if(!foundUser){
        return next(createHttpError[401]("Login fail!!, Not Found User."))
    }

    //check password
    let checkPassword = await bcrypt.compare(password, foundUser.password)
    if(!checkPassword){
        return next(createHttpError[401]("Login fail!!, Password is not right!!"))
    }

    const payload = { 
      id: foundUser.id,
      role: foundUser.role 
    }
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: '15d'
  }) 

    const {password: pw, createdAt, updatedAt, ...userData} = foundUser

    res.json({
        message: "Login Successful",
        token,
        user: userData
    })
}

export const profileUser = async(req, res)=>{
  const userId = req.user.id
  const user = await getMe(userId)
  res.json({ id: user.id, email: user.email, role: user.role })
}







