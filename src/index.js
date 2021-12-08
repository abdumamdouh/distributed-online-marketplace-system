const express = require('express')
require('./db/server') // ensure that the file runs and it is connected to the database
var cors = require('cors')
// App routers
const userRouter = require('./routers/users')
const productRouter = require('./routers/products')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json()) 
app.use(cors())
app.use(userRouter)
app.use(productRouter)

app.listen( port, ()=> {
    console.log('Server is up on ' + port)
})