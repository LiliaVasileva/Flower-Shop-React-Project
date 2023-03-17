const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, 'Email is required!'],
        validate: /^[^@]+@[^@]+\.[^@]+$/
    }, 
    firstName: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [1, 'First name should be at least 1 characters long.']
    },
    lastName: {
        type: String,
        required: [true, 'Username is required!'],
        minLength: [1, 'Last name should be at least 1 characters long.']
    },
    password: {
        type: String,
        required: [true, 'Password is required!'],
        minLength: [5, 'Password should be at least 5 characters long.']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;