const express=require("express")
const dotenv=require("dotenv")
dotenv.config()
const app = express()
const port =process.env.APP_PORT||7000
const expressServer=app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
module.exports=expressServer