const express = require('express')
const User = require('../models/users')
const auth = require('../middleware/auth')

const router = new express.Router()


// (Public) creating a new user (siging-up)
router.post('/users' , async (req,res) =>{
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()   
        res.send( { user: user.getPublicUser() , token} )    
    } catch(error){
        res.status(400).send(error)
    }
})

//(Public) login route
router.post('/users/login' , async (req,res) =>{
    try {
        const user = await User.findByCredetials(req.body.email , req.body.password)
        const token = await user.generateAuthToken()  
        res.send( {user: user.getPublicUser() , token} )
    } catch(error){
        res.status(400).send(error.message)
    }
})

//(Private) logout route
router.post('/users/logout' , auth , async (req,res) =>{
    try {
        req.user.tokens = req.user.tokens.filter((token)=>{
            return token.token !== req.token
        }) 
        await req.user.save()
        res.send()
    } catch(error){
      res.status(500).send()
    }
})

//(Private) logout from all sessions
router.post('/users/logout-all' , auth , async (req,res) =>{
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch(error){
      res.status(500).send()
    }
})

//(Private) Purchase item
router.post('/users/purchaseItem' , auth , async (req,res) => {
    try{
        if (req.user.balance > req.body.price){
            req.user.balance -= req.body.price
            req.user.purchasedItems = req.user.purchasedItems.concat(req.body)
            await req.user.save()
            res.status(200).send(req.user)
        } else {
            throw new Error("Insufficient balance.")
        }
    } catch(error) {
        res.status(400).send(error.message)
    }
})

//(Private) Add item to your inventory
router.post('/users/addItem' , auth , async (req,res) => {
    try{
        req.user.inventory = req.user.inventory.concat(req.body)
        await req.user.save()
        res.send(req.user)
    } catch(error) {
        res.status(400).send()
    }
})

//(Private) reading my profile 
router.get('/users/me', auth , async (req,res) => {
    res.status(200).send(req.user.getPublicUser())
})

//(Private) getting all of the inventory contents
router.get('/users/getInventory', auth , async (req,res) => {
    res.status(200).send(req.user.inventory)
})

//(Private) getting all of purchased items 
router.get('/users/getPurchasedItems', auth , async (req,res) => {
    res.status(200).send(req.user.purchasedItems)
})

//(Private) Updating my account's info
router.patch('/users/me' ,auth, async (req,res) =>{
    
    // checking if it's allowed to update the incoming properties
    const updates = Object.keys(req.body)
    const allowedUpdates = ['email','password','name',"balance"]
    
    const isValidUpdate = updates.every( (update) => allowedUpdates.includes(update) )
    
    if (!isValidUpdate){
        return res.status(400).send("No document found with these properties")
    }

    try {
        // since a single update is a stirng we use [] to access user properties 
        updates.forEach((update) => req.user[update] = req.body[update] )
        await req.user.save()
        res.send(req.user)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

//(Private) deleting my account
router.delete('/users/me' , auth ,async (req,res) =>{
    try {
        await req.user.remove()
        res.status(200).send(req.user)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
