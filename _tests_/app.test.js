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