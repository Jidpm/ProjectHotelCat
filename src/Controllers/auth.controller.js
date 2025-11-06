import createHttpError from "http-errors"
import bcrypt from 'bcryptjs'
import { registerSchema } from "../Validations/Schema.js"
import { createUser, getUserBy } from "../Services/user.service.js"

export const register = async (req, res, next)=>{
    const { identity,phoneNumber, email, firstName, lastName, password, confirmPassword } = req.body
    //validation
console.log('req.body', req.body)
    
    const user = registerSchema.parse(req.body)
    //Check Identity
    const identityKey = user.email ? 'email' : 'phoneNumber'
    if (!identityKey) {
    return next(createHttpError[400]('identity must be email or phone number')) 
  }
    //Check User are already registered
    const haveUser = await getUserBy(identityKey,identity) //!! 
    console.log('haveUser', haveUser)
    if (haveUser) {
    return next(createHttpError[409]('This user already register')) //!!
  }
console.log('user', user)
  const newUser = {...user, password: await bcrypt.hash(password, 10)}
  console.log('newUser', newUser)
  const result = await createUser(newUser)
  console.log('result', result)
    res.json({
        message: "Register Successful",
        result: result
    })
}


