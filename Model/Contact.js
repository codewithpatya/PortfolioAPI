const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    message:String,
    date: {
        type: Date
    }
})

module.exports =  mongoose.model("Pcontact",contactSchema)

