const mysql = require("mysql2")
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "r_crud"
})

pool.getConnection((err)=>{
    if(err){
        console.log("Err:", err)
    }else{
        console.log("Mysql connected successfully..")
    }
})

module.exports = pool.promise()
