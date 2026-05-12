const users = require('../Models/Usermodel')
const jwt = require('jsonwebtoken')

exports.registerUser=async(req,res)=>{
    console.log("inside Register function",req.body);
    const {username,email,password}=req.body
    try{

        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(401).json({message:"Already exists"})
        }
        else{
            const newUser = new users({username,email,password})
            await newUser.save() //save into mongodb
            res.status(200).json({message:" user Registered successfully",newUser})
        }
    }
    catch(err){
        res.status(500).json({message:"Server Error",err})
    }
}



exports.loginUser=async(req,res)=>{
    console.log("Inside Login Function",req.body)
    const {email,password}=req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
           if(existingUser.password===password){
            const token = jwt.sign({userMail:existingUser.email,userId:existingUser._id},process.env.jwtKey)
                console.log(token);
                res.status(200).json({message:"Login Successfull..",existingUser,token})
           }
           else{
                res.status(401).json({message:"Password Mismatch"})
           }
        }
        else{
            res.status(401).json({message:"User Not Found"})
        }
    }
    catch(err){
        res.status(500).json({message :"Server err",err})
    }
}

exports.googleloginUser=async(req,res)=>{
    console.log("Inside Login Function",req.body)
    const {email,password,username,profile}=req.body 
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
                
                res.status(200).json({message:"Login Successfull..",existingUser,token})
           
        }
        else{
             const newUser = new users({username,email,password,profile})
            await newUser.save() //save into mongodb
             res.status(200).json({message:"user saved successfully",existingUser})
        }   
    }
    catch(err){
        res.status(500).json({message :"Server err",err})
    }
}