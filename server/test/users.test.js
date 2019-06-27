const { expect } = require('chai');
const request = require('supertest');
const nock = require('nock');

const app = require('../index');
const { github } = require('../config');

const mocks = {
	github: {
		users: {
			response: require('./mocks/github/users.response')
		}
	},
	api: {
		users: {
			response: require('./mocks/api/repos.response')
		}
	}
}

describe('GET user repos', () => {

	describe('errors', () => {

		it('should throw 400 for invalid query params', done => {
	
			request(app)
					.get('/users/sebjwallace')
					.query({})
					.end((err, res) => {
							expect(err).to.eq(null);
							expect(res.status).to.eq(400);
							done();
					});
	
		});

	})

	describe('success', () => {

		it('should return a user\'s repos', done => {

			const query = {
				direction: 'asc',
				sort: 'created',
				type: 'all'
			};

			const headers = {
				link: '<https://api.github.com/user/7163145/repos?page=2>; rel="next", <https://api.github.com/user/7163145/repos?page=2>; rel="last"'
			};
	
			nock(github.url)
				.get('/users/sebjwallace/repos')
				.query(query)
				.reply(200, mocks.github.users.response, headers);
	
			request(app)
				.get('/users/sebjwallace')
				.query(query)
				.end((err, res) => {
					expect(err).to.eq(null);
					expect(res.status).to.eq(200);
					expect(res.body).to.deep.eq(mocks.api.users.response);
					done();
				});
	
		});

	})

});