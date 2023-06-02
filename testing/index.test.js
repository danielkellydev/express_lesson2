const request = require('supertest');

describe('Has a homepage', () => {

    //test
    it('...it responds with status 200.', async () => {
        // response = await request(server Instance).HTTp method('some route')
        const response = await request(app).get('/');

        expect(response.statusCode).toBe(200);
    });

    //test
    it('...it responds with a JSON object.', async () => {
        // response = await request(server Instance).HTTp method('some route')
        const response = await request(app).get('/');

        const responseBodyDataType = typeof response.body;
        console.log(responseBodyDataType);

        expect(response.body).toBe({message: 'Welcome to our API'});
        });

    });