<template>
  <div class="hidden-sm-and-up">
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center mr-1">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="20"
        />

        <h3>Blog</h3>
      </div>

      <v-spacer></v-spacer>

      <router-link to="/">
        <v-btn small text>
          <span class="">Home</span>
          <!-- <v-icon>mdi-home</v-icon> -->
        </v-btn>
      </router-link>

      <router-link to="/posts">
        <v-btn small text>
          <span>Posts</span>
        </v-btn>
      </router-link>

      <router-link v-if="loggedIn" to="/admin/add-post">
        <v-btn small text>
          <span>ADD POST</span>
        </v-btn>
      </router-link>

      <router-link v-if="!loggedIn" to="/auth/login">
        <v-btn small text>
          <span>LOGIN</span>
        </v-btn>
      </router-link>

      <router-link v-if="loggedIn" to="/auth/logout">
        <v-btn small text>
          <span>LOGOUT</span>
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