const express = require("express")
const app = express()
require("dotenv").config()
require("./config/db")
app.use(express.json())
require("./config/db.mysql")




const blogRouter = require("./routers/blog.router")
const blogMysqlRouter = require("./routers/blogMysql.router")
const userRouter = require("./routers/user.router")

const { verifyToken } = require("./controllers/auth.controller")

app.use("/api/blog", verifyToken, blogRouter)
app.use("/api/mysql/blog", blogMysqlRouter)
app.use("/api", userRouter)

app.listen(process.env.PORT, ()=>{
    console.log(`Server up and running on port 3000`)
})