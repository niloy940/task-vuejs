<template>
  <v-container>
    <v-form
      @submit.prevent="login"
      @keydown="resetValidation"
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        type="email"
        required
      ></v-text-field>

      <v-text-field
        type="password"
        v-model="password"
        :counter="6"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>

      <v-btn
        :disabled="!valid"
        type="submit"
        color="success"
        class="mr-4"
        @click="validate"
        >Login</v-btn
      >

      <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

      <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  title: "Login",

  data: () => ({
    valid: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) =>
        (v && v.length >= 6) || "Password must be grater than 5 characters",
    ],
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },

    reset() {
      this.$refs.form.reset();
    },

    resetValidation() {
      this.$refs.form.resetValidation();
    },

    login() {
      if (this.valid) {
        this.$store.dispatch("auth/retrieveToken").then(() => {
          this.$router.push({ name: "home" });
        });
      }
    },
  },
};
</script>