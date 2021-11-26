class AppStorage {
	static storeToken(token) {
		localStorage.setItem('token', token);
	}

	static clear() {
		localStorage.removeItem('token');
	}

	static getToken() {
		return localStorage.getItem('token');
	}
}

export default AppStorage;