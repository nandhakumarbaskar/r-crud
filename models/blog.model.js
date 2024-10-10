const mongoose = require("mongoose")
const blogSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    description: String,
    isPublished: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("blog", blogSchema)