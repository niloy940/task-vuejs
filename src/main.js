import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import titleMixin from './mixins/titleMixin'
Vue.mixin(titleMixin)

import authModule from "./modules/auth";
import adminModule from "./modules/admin";
import postsModule from "./modules/posts";

import { registerModules } from "./register-modules";
import vuetify from "./plugins/vuetify";

registerModules({
  auth: authModule,
  admin: adminModule,
  posts: postsModule
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'home',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
