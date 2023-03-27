const mongoose = require('mongoose');
const User = require('./User');


const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [2, 'The name should be at least 2 characters long!']
    },
    price: {
        type: Number,
        required: [true, 'The price is required!'],
        min: [1, 'The price should be a positive number!']
    },
    category: {
        type: String,
        required: [true, 'Category is required!']
    },
    description: {
        type: String,
        required: [true, 'Please add a description!']
    },
    image: {
        type: String,
        required: [true, 'Please add Image Url!']
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;