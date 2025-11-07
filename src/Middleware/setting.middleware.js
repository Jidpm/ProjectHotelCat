import createHttpError from "http-errors"

//admin setting
export const adminMiddleWare = (req, res, next)=>{
    if(req.user && req.user.role === "ADMIN"){
        next()
    }else {
        next(createHttpError[403],"Authorization failed: Access restricted to administrators.")
    }
}

//user can setting
export const userMiddleWare = (req, res, next)=> {
    if(req.user && (req.user.role === "ADMIN" || req.user.role === "USER")){
        next()
    }else{
        next(createHttpError[403],"Authorization failed: You do not have the required role.")
    }
}