const { getFeedback, getFeedbackbyid, postFeedback, putFeedback, deleteFeedback } = require("../Controller/Feedbackcontroller")

const route = require("express").Router()

route.get("/",getFeedback)

route.get("/byid/:id",getFeedbackbyid)

route.post("/",postFeedback)

route.put("/:id",putFeedback)

route.delete("/:id",deleteFeedback)

module.exports = route