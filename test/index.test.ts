const request = require('supertest');
const app = require('../app');

describe('testing api endpoints', () => {
    it('GET /api/getEmployes/ - get employes - success', async () => {
        const body = await request(app).get('/api/getEmployes/');
        expect(201);
        expect(JSON.parse(body['text'])).toEqual(
            [
                {
                    "_id": "615ef1d7294e379d091e4843",
                    "id": "EMP001",
                    "name": "Rakoto",
                    "firstname": "Baptiste",
                    "dateCreated": "2021-10-07T15:22:43.511Z",
                    "department": "Info",
                    "__v": 0
                },
                {
                    "_id": "615ef1f3294e379d091e4845",
                    "id": "EMP002",
                    "name": "Rakoto",
                    "firstname": "Tatou",
                    "dateCreated": "2021-10-07T15:25:43.511Z",
                    "department": "Info",
                    "__v": 0
                },
                {
                    "_id": "615ef4fd742ba378b0f523e0",
                    "id": "EMP003",
                    "name": "Rakoto",
                    "firstname": "Mavou",
                    "dateCreated": "2021-10-07T15:35:43.511Z",
                    "department": "Info",
                    "__v": 0
                },
                {
                    "_id": "61602495c38ed24a37f0b604",
                    "id": "EMP004",
                    "name": "Rakoto",
                    "firstname": "Beloha",
                    "dateCreated": "2021-10-08T15:35:43.511Z",
                    "department": "Info",
                    "__v": 0
                }
            ]
        )
    });
});
