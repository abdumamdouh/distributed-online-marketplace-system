const User = require('../models/users')
const jwt = require('jsonwebtoken')

const auth = async (req,res,next) => {
    try{
        // getting the token value from the coming header
        const token = req.header('Authorization').replace('Bearer ','')
        // decoding the token to get token object with _id and issuedAt properties
        const decodedToken =  jwt.verify(token,"haytherebaby") 
        //  checking if there is a user with that id and if the coming token is still valid
        const user = await User.findOne({id : decodedToken.id , 'tokens.token':token})
        
        if (!user){
            throw new Error () 
        }
        // passing the token to any router to use it afterwards
        req.token = token 
        // since we reached here means we have a matched user and we will pass it to the router
        req.user = user 
        next()  
    } catch(e) {
        res.status(401).send("Authentication Falied.")
    }
}

module.exports = auth 