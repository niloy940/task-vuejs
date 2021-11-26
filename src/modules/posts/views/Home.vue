<template>
  <div>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "../components/PostList";

export default {
  title: "Posts",

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