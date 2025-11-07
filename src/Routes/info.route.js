import { Router } from "express";
import { addCatInfo, catInfo } from "../Controllers/info.controller.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";


const infoRoute = Router()

//Add Cat detail info
infoRoute.post('/catinfo', addCatInfo)
//get cat detail info
infoRoute.get('/catinfo', authMiddleware , catInfo)

infoRoute.get('/roomType',()=>{})
infoRoute.put('/catinfo-update', ()=>{})

export default infoRoute