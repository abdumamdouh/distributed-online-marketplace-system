const mongoose = require('mongoose')
const validator = require('validator')


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
    Oldprice:{
        type: Number,
        validate (value) {
            if (value < 0) {
                throw new Error ('Price must be positive value.')
            }
        }
    } ,
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
        required: true
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
        required: true
    }
})

// creating product model
const Product = mongoose.model(productSchema)

module.exports = Product