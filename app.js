const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv/config")
const app = express()

// import all route
const Contactroute = require("./Router/Contactrouter")
const FeedbackRoute = require("./Router/Feedbackrouter")

// middleware
app.use(express.json())

app.use(cors())

app.use("/api/Pcontact",Contactroute)
app.use("/api/Pfeedback",FeedbackRoute)

// by default get
app.get("/",(req,res)=>{
    res.send("THIS IS PRATIKSHA'S PORTFOLIO!!")
})

// connection
app.listen(process.env.PORT)

async function main() {
    const res = await mongoose.connect(process.env.DB,{useNewUrlParser: true,
        useUnifiedTopology: true})
        const data = res.default
        console.log(data.STATES['1']);
}
main()