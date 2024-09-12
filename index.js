const express=require("express")
const app=express();
const dotenv=require("dotenv").config()
const cors=require("cors")

const controller=require("./controller/sendmail")

app.use(cors())
app.use(express.json())


app.post("/contact",controller.mail)


app.listen(process.env.PORT || 5000,()=>console.log(`server started on ${process.env.PORT}`))