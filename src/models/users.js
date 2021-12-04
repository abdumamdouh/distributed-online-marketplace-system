const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.get('', (req, res) =>{
    console.log('This is the response')
})

app.listen(port, ()=>{
    console.log('server is on port ' + port)
})