const request = require('supertest');
const server = require('../api/server.js');

describe('recipe-router', function() {
   

    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })

    describe('POST /:id/user', function() {
        it('should create new recipe', function() {
            return request(server).post('/api/recipes/:id/user')
            .then(res => {
                expect(res.type).toMatch(/json/i)
            })
        })
    })
})