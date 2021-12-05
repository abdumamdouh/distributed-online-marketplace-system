const mongoose = require('mongoose')
require('mongoose-type-url');

// defining product Schema
const productSchema = new mongoose.Schema({
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
        type: String
    },
    best:{
        type: Boolean
    },
    featured:{
        type: Boolean
    },
    image: {
        type: mongoose.SchemaTypes.Url,
    },
    gallarey: [{
        sku:{
            type: String
        },
        url:{
            type: mongoose.SchemaTypes.Url
        }
    }],
    stars:{
        type: Number
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