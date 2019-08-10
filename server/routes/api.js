const express = require( 'express' )
const router = express.Router()
const request = require('request')

router.get('/sanity', function(req, res){
    console.log("OK")
})

router.get('/recipes/:ingredient', function(req, res){
    let ingredient = req.params.ingredient
    request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function(err, response){
        res.send(JSON.parse(response.body).results)
    })
})

module.exports = router
