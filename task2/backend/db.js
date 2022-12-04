const mongoose=require('mongoose');

const mongoURL="mongodb://localhost:27017/atgsolution"

const connectToDatabase=()=>{
    mongoose.connect(mongoURL,()=>{
        console.log('connected to Database')
    });
}
module.exports =connectToDatabase