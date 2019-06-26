module.exports = {
    port: 3000,
    github: {
        url: 'https://api.github.com',
        headers: {
            'User-Agent': 'request'
        },
        params: {
            users: {
                type: [
                    'all',
                    'owner',
                    'member'
                ],
                sort: [
                    'created',
                    'updated',
                    'pushed',
                    'full_name'
                ],
                direction: [
                    'asc',
                    'desc'
                ]
            }
        }
    }
}