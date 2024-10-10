const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/r-db")
const dbConn = mongoose.connection

dbConn.on("open", ()=>{
    console.log("Mongoose connected successfully..")
})

dbConn.on("error", (error)=>{
    console.log("Mongoose error:", error)
})

dbConn.on("close", ()=>{
    console.log("Mongoose closed")
})