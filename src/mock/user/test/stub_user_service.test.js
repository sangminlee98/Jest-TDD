const StubUserClient = require('./stub_user_client');
const UserService = require('../user_service');

describe('User Service test', () => {
    let userService;
    beforeEach(() => {
        userService = new UserService(new StubUserClient());
    });
    it('logined user should isLogedIn be true', async() => {
        const state = await userService.login('id','password');
        expect(state).toBeTruthy();
        expect(userService.isLogedIn).toBeTruthy();
    })
})