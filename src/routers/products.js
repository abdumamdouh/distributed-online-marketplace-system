const express = require('express')
const Product = require('../models/products')
const User = require('../models/users')
const auth = require('../middleware/auth')


const  router = new express.Router()

//(Private) Get all products


router.get('/products',  async (req,res) =>{

    try{
        const products = await Product.find({})
        res.send(products)
    } catch (error) {
        res.status(400).send(error.message)
    }
}) 

//(Private) Get product by it's id


router.get('/products/:id', async (req,res) =>{

    try{
        const product = await Product.findById(req.params.id)
        res.send(product)
    } catch (error) {
        res.status(400).send(error.message)
    }
}) 

//(Private) Creating new product and adding Product to your inventory
router.post('/products/addItem' , auth, async (req,res) => {
    try{
        const product = new Product(req.body)
        product.gallarey = product.gallarey.concat({url: req.body.image}) 
        product.seller = req.user.name
        await product.save()

        req.user.inventory = req.user.inventory.concat(product)
        await req.user.save()
        res.send({user:req.user,product})
    } catch(error) {
        res.status(400).send(error.message)
    }
})

//(Private) purchasing a product

router.post('/products/purchaseItem/:id' , auth , async (req,res) => {
    try{
        const _id = req.params.id
        const product = await Product.findOne({_id})
        console.log(req.user.balance)
        if (req.user.balance >= product.price ){
            const seller = await User.findOne({name:product.seller}) 
            seller.balance += product.price
        // console.log(seller.balance)
            await seller.save()
            
            req.user.balance -= product.price
            req.user.purchasedItems = req.user.purchasedItems.concat(product)
            await req.user.save()
            res.status(200).send({buyer:req.user,seller})
        } else {
            throw new Error("Purchasing Failed.")
        }
    } catch(error) {
        res.status(400).send(error.message)
    }
})

//(Private) delete a product  

router.delete('/products/deleteItem/:id', auth ,async  (req,res)=>{
    try{
        let valid_delete = 0 
        for (let i = 0 ; i < req.user.inventory.length ; i++){
            // console.log(req.user.inventory[i]._id.toString() , req.params.id)
            if (req.user.inventory[i]._id.toString() === req.params.id){
                valid_delete = 1
            }
        }
        if (valid_delete){
            await Product.deleteOne({_id : req.params.id})
            req.user.inventory = req.user.inventory.filter((elem) =>{
                return elem._id.toString() !== req.params.id
            })
            await req.user.save()
            res.status(200).send(req.params.id)
        } else {
            throw new Error ('Cannot delete item.')
        }
    } catch (error){
        res.status(404).send(error.message)
    }   
})

module.exports = router
