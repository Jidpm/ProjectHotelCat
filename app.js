import express from "express";
import helmet from "helmet";
import cors from 'cors'
import authRoute from "./src/Routes/auth.route.js";
import errorMiddleware from "./src/Middleware/error.middleware.js";
import notFoundMiddleware from "./src/Middleware/notfound.middleware.js";
import infoRoute from "./src/Routes/info.route.js";





const app = express()
app.use(express.json())

app.use(helmet())
app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use('/api/auth', authRoute)
app.use('/api/info', infoRoute)


app.use(errorMiddleware)
app.use(notFoundMiddleware)


export default app