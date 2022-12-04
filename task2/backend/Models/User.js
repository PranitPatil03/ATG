const mongoose=require('mongoose');

const {Schema} = require('mongoose');

const UserSchema = new Schema({
    username:{
        type: 'string',
        required: true
    },
    email:{
        type: 'string',
        required: true
    },
    password:{
        type: 'string',
        required: true
    },
})

const User=mongoose.model('User',UserSchema);

module.exports = User;