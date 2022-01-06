const UserClient = require('../user_client');
const UserService = require('../user_service');
jest.mock('../user_client');

describe('User Service test', () => {
    const login = jest.fn(async(id, password) => {
        return{
            id,
            password,
        }
    });
    UserClient.mockImplementation(() => {
        return {
            login,
        }
    });
    let userService;
    beforeEach(() => {
        userService = new UserService(new UserClient());
    });

    it('logined user should isLogedIn be true', async() => {
        await userService.login('id','password');
        expect(userService.isLogedIn).toBeTruthy();
    });
    it('should not call login() on UserClient again if already logged in', async() => {
        await userService.login('id','password');
        await userService.login('id','password');
        expect(login).toHaveBeenCalledTimes(1);
    });
})