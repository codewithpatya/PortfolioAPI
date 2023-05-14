const Feedback = require("../Model/Feedback")

// get
exports.getFeedback = async (req,res)=>{
    try {
        const data = await Feedback.find()
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// getDatabyid
exports.getFeedbackbyid = async (req,res)=>{
    try {
        const data = await Feedback.findById(req.params.id)
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// post
exports.postFeedback = async (req,res)=>{
    try {
        const newFeedback = new Feedback(req.body)
        const data = await newFeedback.save()
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// put
exports.putFeedback = async (req,res)=>{
    try {
        const data = await Feedback.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}

// delete
exports.deleteFeedback = async (req,res)=>{
    try {
        const data = await Feedback.findByIdAndDelete(req.params.id)
        return res.json({errors:false,data:data}) 
    } catch (error) {
        return res.status(400).json({errors:true,message:error.message})
    }
}
