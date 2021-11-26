import * as types from "./mutation-types";

export default {
	[types.RETRIVE_TOKEN](state, token) {
		state.token = token;
	},

	[types.DESTROY_TOKEN](state) {
		state.token = null;
	},
}