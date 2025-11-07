import { Router } from "express";
import { login, profileUser, register } from "../Controllers/auth.controller.js";
import { authMiddleware } from "../Middleware/authMiddleware.js";
import { adminMiddleWare } from "../Middleware/setting.middleware.js";
import { getSettings, updateSettings } from "../Controllers/setting.controller.js";


const authRoute = Router()

authRoute.post('/register', register)
authRoute.post('/login', login)
authRoute.get('/profile', authMiddleware, profileUser)



//Everyone can see Settings but need to login
authRoute.get('/settings', authMiddleware, getSettings)
//Admin can update setting
authRoute.put('/settings', authMiddleware, adminMiddleWare, updateSettings)

export default authRoute