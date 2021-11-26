const Module = () => import('./Module.vue');
const Home = () => import('./views/Home.vue');
const AddPost = () => import('./views/AddPost.vue');

const moduleRoute = {
	path: '/admin',
	component: Module,
	children: [
		{
			path: '',
			component: Home
		},

		{
			path: 'add-post',
			component: AddPost
		}
	]
};

export default router => {
	router.addRoutes([moduleRoute]);
};