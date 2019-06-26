const { expect } = require('chai');
const request = require('supertest');
const nock = require('nock');

const app = require('../index');
const { github } = require('../config');

const mocks = {
    users: {
        response: {
            asc: require('./mocks/users.asc.response')
        }
    }
}

describe('GET user repos', () => {

  it('should return a user\'s repos', done => {

    const query = {
        direction: 'asc',
        sort: 'created',
        type: 'all'
    };

    nock(github.url)
        .get('/users/sebjwallace/repos')
        .query(query)
        .reply(200, mocks.users.response.asc);

    request(app)
        .get('/users/sebjwallace')
        .query(query)
        .end((err, res) => {
            expect(err).to.eq(null);
            expect(res.status).to.eq(200)
            expect(res.body).to.deep.eq(mocks.users.response.asc);
            done();
        })

  });

});