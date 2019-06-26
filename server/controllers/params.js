const { users: usersParams } = require('../config').github.params;

const users = async (req, res) => {

    return res.json(usersParams);

};

module.exports = {
    users
}