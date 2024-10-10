const { verify } = require("jsonwebtoken")

const verifyToken = (req, res, next)=>{
    try{
        console.log(req.headers.authorization, req.headers)
    const bearerToken = req.headers.authorization.split(" ")[1]
    if(verify(bearerToken, 'SECRET')){
        next()
    }else{
        res.status(401).json({
        success: false,
        message: "Invalid token"
    })    
    }

    }catch(error){
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
    
    
    
}

module.exports = {
    verifyToken
}