const express = require("express")
const dotenv = require("dotenv")
const app = express()
dotenv.config()

// middleware
app.use(express.json())

// Routes
app.use("/" , require("./routes/paymentRoutes"))

// server configuration
app.listen(8080,()=>{
    console.log(`Server Is Runing On http://localhost:8080`)
})