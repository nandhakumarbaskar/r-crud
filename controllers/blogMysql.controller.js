const mysql = require("../config/db.mysql")

const createBlog = async (req, res)=>{
    try{
        const { title, description, isPublished } = req.body
        const [result] = await mysql.query(`insert into blogs (title, description) values(?,?)`, [title, description])
        console.log("result", result)
        if(result.insertId){
            res.status(201).json({
                success: true,
                message: "Blog created successfully.."
            })
        }else{
            res.status(400).json({
                success: false,
                message: "Error in blog creation"
            })
        }
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getBlogs = async (req, res)=>{
    try{
        const result = await mysql.query(`select * from blogs`)
        console.log("result", result)
        const [subResult] = result
        if(subResult){
            res.status(200).json({
                success: true,
                data: subResult
            })
        }else{
            res.status(400).json({
                success: false,
                message: "Error in blog getBlogs"
            })
        }
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getBlogById = async (req, res)=>{
    try{
        const id = req.params.id
        const result = await mysql.query(`select * from blogs where id=?`, [id])
        console.log("result", result)
        const [subResult] = result
        if(subResult){
            res.status(200).json({
                success: true,
                data: subResult
            })
        }else{
            res.status(400).json({
                success: false,
                message: "Error in blog getBlogById"
            })
        }
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const updateBlogById = async (req, res)=>{
    try{
        const id = req.params.id
        const { title, description } = req.body
        const result = await mysql.query(`update blogs set title=?, description=? where id=?`, [title, description, id])
        console.log("result", result)
        const [subResult] = result
        if(subResult){
            res.status(200).json({
                success: true,
                data: subResult
            })
        }else{
            res.status(400).json({
                success: false,
                message: "Error in blog getBlogById"
            })
        }
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const removeById = async (req, res)=>{
    try{
        const id = req.params.id
        const result = await mysql.query(`delete from blogs where id=?`, [id])
        console.log("result", result)
        const [subResult] = result
        if(subResult){
            res.status(200).json({
                success: true,
                data: result
            })
        }else{
            res.status(400).json({
                success: false,
                message: "Error in blog removeById"
            })
        }
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const removeAll = async (req, res)=>{
    try{
        const result = await mysql.query(`delete from blogs`)
        console.log("result", result)
        const [subResult] = result
        if(subResult){
            res.status(200).json({
                success: true,
                data: subResult
            })
        }else{
            res.status(400).json({
                success: false,
                message: "Error in blog removeById"
            })
        }
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlogById,
    removeById,
    removeAll
}