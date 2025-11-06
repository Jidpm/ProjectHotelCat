import express from "express";
import helmet from "helmet";
import cors from 'cors'
import authRoute from "./src/Routes/auth.route.js";




const app = express()

app.use(helmet())
app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())

app.use('/api/auth', authRoute)


export default app