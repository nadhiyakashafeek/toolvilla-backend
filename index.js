const dns = require("dns");
dns.setServers(["1.1.1.1"]);

require('dotenv').config()        // ← ADD THIS as line 1!


const express = require('express')
require('./config/db')

const cors = require('cors');
const userRoute = require("./Router/userRouter");
const productRoute =require('./Router/productRouter')
const toolVillaServer = express()

toolVillaServer.use(cors())
toolVillaServer.use(express.json())
toolVillaServer.use(express.urlencoded({ extended: true }))
toolVillaServer.use(userRoute)
toolVillaServer.use(productRoute)
toolVillaServer.use('/uploads',express.static('./uploads'))


const PORT = process.env.PORT || 3000

toolVillaServer.get('/',(req,res)=>{
    res.send("ToolVilla server started....")
})
toolVillaServer.listen(PORT,()=>{
    console.log("TV Server running on the port ",PORT)
})