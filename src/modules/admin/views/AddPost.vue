<template>
  <v-container>
    <v-form
      @submit.prevent="addPost"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field v-model="form.title" label="Title" required></v-text-field>

      <v-text-field
        v-model="form.previewText"
        label="Preview Text"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.thumbnail"
        label="Thumbnail URL"
        required
      ></v-text-field>

      <v-btn :disabled="!valid" type="submit" color="success" class="mr-4"
        >Add Post</v-btn
      >
    </v-form>
  </v-container>
</template>

<script>
export default {
  title: "Login",

  data: () => ({
    valid: true,
    form: {
      title: "",
      previewText: "",
      thumbnail: "",
    },
  }),

  methods: {
    addPost() {
      this.form.id = this.getId();

      this.$store.dispatch("posts/addPost", this.form).then(() => {
        this.$router.push({ name: "posts" });
      });
    },

    getId() {
      const length = this.$store.state.posts.loadedPosts.length;

      return length + 1;
    },
  },
};
</script>