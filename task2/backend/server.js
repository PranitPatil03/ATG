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

app.listen(port, () => {
    console.log("listening on port " + port)
})