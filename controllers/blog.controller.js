const blogModel = require("../models/blog.model")

const createBlog = async (req, res)=>{
    try{
        const body = req.body
        const blogObj = new blogModel({
            title: body.title,
            description: body.description
        })
        const result = await blogObj.save()
        if(result){
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
        const result = await blogModel.find()
        if(result){
            res.status(200).json({
                success: true,
                data: result
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
        const result = await blogModel.findById(id)
        if(result){
            res.status(200).json({
                success: true,
                data: result
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
        const result = await blogModel.findByIdAndUpdate(id, req.body)
        if(result){
            res.status(200).json({
                success: true,
                data: result
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
        const result = await blogModel.findByIdAndDelete(id)
        if(result){
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
        const result = await blogModel.deleteMany()
        if(result){
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

module.exports = {
    createBlog,
    getBlogs,
    getBlogById,
    updateBlogById,
    removeById,
    removeAll
}