const express = require ('express')
const app = express()
const{getMessage} = require('./controller.js')

app.get('/api', getMessage);


module.exports = app