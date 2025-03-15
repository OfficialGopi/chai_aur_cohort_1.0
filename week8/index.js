import express from "express"
const app = express()
import dotenv from "dotenv"
import cors from 'cors'
import db from "./utils/db.js"
import registerUser from "./controller/user.controller.js"
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
// app.get('/', (req, res) => {
//   res.send('cohort!')
// })
app.get('/shivam', (req, res) => {
  res.send('Hello shivam!')
})
app.get('/suraj', (req, res) => {
  res.send('Hello suraj!')
})
// console.log(process.env);
// console.log( typeof express());
// console.log("app", app);

//mongodb connect
db()

//route import
app.use('/api/v1/users', registerUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})