const Module = () => import('./Module.vue');
const Register = () => import('./views/Register.vue');
const Login = () => import('./views/Login.vue');
const Logout = () => import('./views/Logout.vue');

const moduleRoute = {
	path: '/auth',
	component: Module,
	children: [
		{
			path: 'login',
			name: 'login',
			component: Login
		},

		{
			path: 'register',
			name: 'register',
			component: Register
		},

		{
			path: 'logout',
			component: Logout
		},
	]
};

export default router => {
	router.addRoutes([moduleRoute]);
};