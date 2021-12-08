const mongoose = require('mongoose')
require('mongoose-type-url');

// defining product Schema
const productSchema = new mongoose.Schema({
    seller: {
        type: String,
        default: 'Ahmed'
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    title:{
        type: String,
        required: true,
        trim: true
    },
    price:{
        type: Number,
        required: true ,
        validate (value) {
            if (value < 0) {
                throw new Error ('Price must be positive value.')
            }
        }
    },
    brand:{
        type: String,
        default: 'Nike'
    },
    best:{
        type: Boolean,
        default: true
    },
    featured:{
        type: Boolean,
        default: false
    },
    image: {
        type: mongoose.SchemaTypes.Url,
    },
    gallarey: [{
        sku:{
            type: String,
            default: 'v2SmiuNbZ8'
        },
        url:{
            type: mongoose.SchemaTypes.Url,
            default: 'https://i.pinimg.com/564x/70/2e/b7/702eb7c2db52a045e74a20145021eea2.jpg'
        }
    }],
    stars:{
        type: Number,
        default: 2
    },
    description:{
        type: String,
    }
} , {
    timestamps: true
})

// creating product model
const Product = mongoose.model('Product',productSchema)

module.exports = Product