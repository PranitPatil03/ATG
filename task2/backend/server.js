const express=require('express')

const cors=require('cors')

const app=express()
app.use(cors())

app.use(express.json())

const port=8000;

app.get('/', (req,res)=>{
    res.send("Hello from server")
})

app.listen(port,()=>{
    console.log("listening on port "+port)
})