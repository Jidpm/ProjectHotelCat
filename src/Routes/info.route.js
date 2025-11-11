import { Router } from "express";
import { addCatInfo, catInfo, roomType } from "../Controllers/info.controller.js";


const infoRoute = Router()

//Add Cat detail info
infoRoute.post('/catinfo', addCatInfo)
//get cat detail info
infoRoute.get('/catinfo', catInfo)
//update cat info
infoRoute.put('/catinfo-update', ()=>{})

//get roomtype
infoRoute.get('/roomtype/:id', roomType)
infoRoute.post('/roomtype',()=>{})
infoRoute.put('/roomtype',()=>{})

export default infoRoute