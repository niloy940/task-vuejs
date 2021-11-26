import AppStorage from '../models/AppStorage'

export default {
	retrieveToken(context) {
		const token = 'asdfasdf'
		AppStorage.storeToken(token);
		context.commit('RETRIVE_TOKEN', token);
	},

	destroyToken(context) {
		const token = AppStorage.getToken()
		AppStorage.clear(token);
		context.commit('DESTROY_TOKEN');
	},
}