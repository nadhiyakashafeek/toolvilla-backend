const jwt = require('jsonwebtoken')

const jwtMiddleware = (req,res,next) =>{
    console.log("Inside JWT"); 
    next() 
    try{
        const token =  req.headers.authorization.slice(7)
        console.log(token);
        jwtverification = jwt.verify(token,process.env.jwtKey)
        console.log(jwtverification);
        req.payload = jwtverification.userMail
        
    }
    catch(err){
        res.status(401).json("Authorization error...")
    }
}

module.exports = jwtMiddleware