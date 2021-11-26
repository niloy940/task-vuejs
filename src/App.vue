<template>
  <v-app>
    <Appbar />

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar.vue";
import AppFooter from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Appbar,
    AppFooter,
  },
  data: () => ({
    //
  }),
};
</script>
