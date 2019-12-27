const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
   username:{
       type: String,
       required: true,
       unique: true,
       trim: true,
       minlength: 5,
   } ,
    gender:{
       type: String,
        required: true,
        trim: true,
    },
    dob: {
       type: Date,
        required: true,
    },
    news: {
       type: Boolean,
        required: true,
    },
    email: {
       type: String,
        required: true,
        trim: true,
    },
    photo: {
        type: String,
    },
},
    {timestamps: true});

const User = mongoose.model('users', userSchema);
module.exports = User;
