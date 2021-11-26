<template>
  <div>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <h1>Blog</h1>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/">
        <v-btn text>
          <span class="mr-2">Home</span>
          <!-- <v-icon>mdi-open-in-new</v-icon> -->
        </v-btn>
      </router-link>

      <router-link to="/posts">
        <v-btn text>
          <span class="mr-2">Posts</span>
        </v-btn>
      </router-link>

      <router-link v-if="loggedIn" to="/admin/add-post">
        <v-btn text>
          <span class="mr-2">ADD POST</span>
        </v-btn>
      </router-link>

      <router-link v-if="!loggedIn" to="/auth/login">
        <v-btn text>
          <span class="mr-2">LOGIN</span>
        </v-btn>
      </router-link>

      <router-link v-if="loggedIn" to="/auth/logout">
        <v-btn text>
          <span class="mr-2">LOGOUT</span>
        </v-btn>
      </router-link>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.state.auth.token != null;
    },
  },
};
</script>