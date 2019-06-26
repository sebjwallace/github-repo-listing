const axios = require('axios');
const { stringify } = require('query-string');
const { github } = require('../config');

module.exports = async (req, res) => {

    const {
        params: {
            username
        },
        query
    } = req;

    const url = `${github.url}/users/${username}/repos?${stringify(query)}`;

    const { data: repos } = await axios.get(url);

    res.send(repos);

};