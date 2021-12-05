const express = require('express')
const Product = require('../models/products')
const  router = new express.Router()

router.post('/products', (req, res)=> {
    const product = new Product(req.body)
    product.save().then( ()=>{
        res.status(201).send(product)
    }).catch( (e)=>{
        res.status(400).send(e)
    })
})

router.get('/products', (req, res) => {
    Product.find({}).then( (products)=> {
        if( !products ) {
            return res.status(404).send()
        }
        res.status(200).send(products)
    }).catch( (e)=> {
        res.status(500).send()
    })
})

router.get('/products/:id', (req, res) => {
    const _id = req.params.id
    Product.findById(_id).then( (product) => {
        if( !product ) {
            return res.status(404).send()
        } 
        res.status(200).send(product)
    }).catch( (e) => {
        res.status(500).send()
    })
})


module.exports = router
