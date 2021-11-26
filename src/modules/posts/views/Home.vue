<template>
  <div>
    <h1>All Posts</h1>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "../components/PostList";

export default {
  components: { PostList },

  data() {
    return {
      // loadedPosts: [],
    };
  },

  computed: {
    loadedPosts() {
      return this.$store.state.posts.loadedPosts || [];
    },
  },
};
</script>

<style>
</style>