const express = require('express')
const cors = require('cors')
const connectToDatabase = require('./db')
const User= require('./Models/User')
connectToDatabase()
const app = express()
app.use(cors())
app.use(express.json())
const port = 8000;


app.get('/',(req,res)=>{
    res.send("Server Working Fine")
})

app.post('/createuser',async (req,resp)=>{
    const user = new User(req.body)
    const res=await user.save()
    resp.send(res)
})


app.post("/login",async(req,res)=>{
    if(req.body.email && req.body.password){
        let user=await User.findOne(req.body).select("-password")
        if(user){
            res.send(user)
        }else{
            res.send({result:'No User Found'})
        }
    }
    else{
        res.send({result:"No User Found"})
    }
})

app.listen(port, () => {
    console.log("listening on port " + port)
})