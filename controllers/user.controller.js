const userModel = require("../models/user.model")
const { genSaltSync, hashSync, compareSync } = require("bcryptjs")
const jwt = require("jsonwebtoken")

const signUp = async (req, res)=>{
    try{
        const body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync(body.password, salt)
        const userObj = new userModel({
            username: body.username,
            password: body.password
        })
        const result = await userObj.save()
        if(result){
            res.status(201).json({
                success: true,
                message: "user created successfully.."
            })
        }else{
            res.status(400).json({
                success: false,
                message: "Error in userObj creation"
            })
        }
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const login = async (req, res)=>{
    try{
        const body = req.body
        const result = await userModel.findOne({username: body.username})
        if(result){
            if(compareSync(body.password, result.password)){
                const token = jwt.sign({ username: result.username}, "SECRET", { expiresIn: "1hr"})
                res.status(200).json({
                    success: true,
                    message: "login success",
                    token: token
                })
            }else{
                res.status(400).json({
                    success: false,
                    message: "wrong password"
                })
            }
        }else{
            res.status(400).json({
                success: false,
                message: "No data found user"
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
    signUp,
    login
}