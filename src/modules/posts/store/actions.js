export default {
	setPosts(context, posts) {
		context.commit('SET_POSTS', posts)
	},

	addPost(context, post) {
		context.commit('ADD_POST', post)
	}
}