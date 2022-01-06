class UserClient {
    async login (id, password) {
        const response = await fetch('http://example.com/login/id+password');
        return await response.json();
    }
}

module.exports = UserClient;