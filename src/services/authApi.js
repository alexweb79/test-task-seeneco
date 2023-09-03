class AuthAPI {
    static login = async (credentials) => {
        const isAuthenticated = credentials.username === 'Admin' && credentials.password === '12345';
        const error = 'Invalid username or password'

        return {isAuthenticated, error}
    };
}

export default AuthAPI;
