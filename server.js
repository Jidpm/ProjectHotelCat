import app from "./app.js"


const PORT = process.env.PORT || 8900

app.listen(PORT, ()=> console.log(`Server Running on ${PORT}`))

