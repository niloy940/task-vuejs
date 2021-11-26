const Module = () => import('./Module.vue');
const Home = () => import('./views/Home.vue');
const Post = () => import('./views/Post.vue');

const moduleRoute = {
	path: '/posts',
	component: Module,
	children: [
		{
			path: '',
			name: 'posts',
			component: Home
		},

		{
			path: ':id',
			component: Post
		},
	]
};

export default router => {
	router.addRoutes([moduleRoute]);
};