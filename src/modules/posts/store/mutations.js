import * as types from "./mutation-types";

export default {
  [types.SET_POSTS](state, posts) {
    state.loadedPosts = posts;
  },

  [types.ADD_POST](state, post) {
    state.loadedPosts.push(post);
  },

  [types.REMOVE_POST](state, id) {
    state.loadedPosts = state.loadedPosts.filter(item => item.id !== id);
  }
};
