const express = require('express')

const cors = require('cors')

const connectToDatabase = require('./db')

connectToDatabase()

const app = express()
app.use(cors())

app.use(express.json())

const port = 8000;

app.get('/',(req,res)=>{
    res.send("Server Working Fine")
})

app.post('/createuser',(req,res)=>{
    res.send(req.body)
})

app.listen(port, () => {
    console.log("listening on port " + port)
})