const {selectRestaurants} = require('./models');

exports.getMessage = (req,res) => {
    res.status(200).send({ "message": "all ok"})
}

exports.getRestaurants = (req,res) => {
    selectRestaurants().then(({result})=>{
        res.status(200).send({"hello":"world"}) 
    })
}