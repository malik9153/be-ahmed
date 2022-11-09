const db = require('./db/index')

exports.selectRestaurants = () => {
    return db.query('SELECT * FROM restaurants;').then((result)=>{
        console.log(result.rows);
        return result.rows
        
    })
}