const mongoose = require("mongoose")

const feedSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:String,
    message:String,
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports =  mongoose.model("Pfeedback",feedSchema)

