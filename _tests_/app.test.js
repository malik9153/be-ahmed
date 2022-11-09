const request = require("supertest");
const app = require('../app.js');
const connection = require('../db/index.js')

afterAll(()=> {
    connection.end()
})



describe('/api', () => {
    test('responds with a message key' , () => {
        return request(app)
        .get('/api')
     .expect(200)
        .then((body) =>{
            console.log(body.text)
        }
        )
    }) 

    
})

describe('/api/restaraunts', () => {
    test('respond with a json object containing a key of restaurants with a value of an array of all the restaurant objects.' , () => {
        return request(app)
        .get('/api/restaurants')
     .expect(200)
        .then((res) =>{
            expect(res.body.restaraunts).toEqual()
            
            console.log(res.body.restaraunts);
            
        }
        )
    }) 

})


