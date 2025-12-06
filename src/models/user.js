
const mongoose = require('mongoose');

const userSchema  = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 4,
        maxLength:50,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
         min: 18,
    },
    gender: {
        type: String,
       
    }

},{timestamps: true} );

module.exports = mongoose.model("User", userSchema);