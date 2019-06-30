const request = require('request-promise');
const parse = require('parse-link-header');
const { github } = require('../config');

module.exports = async (req, res) => {

    const {
        params: {
            usertype,
            username
        },
        query
    } = req;

    const transform = (body, { headers: { link } }) => ({
        repos: body,
        pages: parseInt((parse(link).last || {}).page)
    });

    const repos = await request({
        url: `${github.url}/${usertype}/${username}/repos`,
        qs: query,
        headers: github.headers,
        json: true,
        transform
    });

    return res.json(repos);

};