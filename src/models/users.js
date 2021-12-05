const mongoose = require('mongoose')
const validator = require('validator')

// defining user Schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate( value ) {
            if( !validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate ( value ) {
            if( value.toLowerCase().includes('password') ) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    balance: {
        type:Number ,
        default: 100, 
    } ,
    inventory:[] ,
    purchasedItems:[] ,
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }]
})



// creating user model 
const User = mongoose.model('User',userSchema)


module.exports = User

