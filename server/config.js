module.exports = {
    port: 5000,
    github: {
        url: 'https://api.github.com',
        headers: {
            'User-Agent': 'request'
        },
        params: {
            repos: {
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