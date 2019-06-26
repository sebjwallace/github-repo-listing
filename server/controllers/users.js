const request = require('request-promise');
const { github } = require('../config');

module.exports = async (req, res) => {

    const {
        params: {
            username
        },
        query
    } = req;

    const repos = await request({
        url: `${github.url}/users/${username}/repos`,
        qs: query,
        headers: github.headers,
        json: true
    });

    return res.json(repos);

};