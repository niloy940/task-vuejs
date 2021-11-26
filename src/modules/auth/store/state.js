import AppStorage from '../models/AppStorage'

export default () => ({
	token: AppStorage.getToken() || null,
});