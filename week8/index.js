import express, { request } from "express"
const app = express()
import dotenv from "dotenv"
import cors from 'cors'
import db from "./utils/db.js"
import cookieParser from "cookie-parser"
import router from "./route/user.route.js"
dotenv.config()

const port = process.env.PORT || 6666

app.use(cors(
    {
        origin: process.env.BASE_URL,
        credentials: true,
        methods:["GET", "POST", "PUT", "DELETE"],
        allowedHeaders:["Content-Type","Authorization"]
    }
))
//jab data url se ata hai to ye use hota hai 
app.use(express.urlencoded({extended:true}))
app.use(express.json())


//mongodb connect
db()


//route import
app.use(cookieParser())
app.use('/api/v1/users', router)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})