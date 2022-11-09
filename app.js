const express = require ('express')
const app = express()
const{getMessage, getRestaurants} = require('./controller.js')

app.get('/api', getMessage);

app.get('/api/restaurants', getRestaurants);


module.exports = app