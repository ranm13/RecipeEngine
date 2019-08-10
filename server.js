const express = require('express')
const app = express()
const path = require('path')
const api = require('./server/routes/api')

app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/', api)

const port = 8080
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})
