<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("auth/destroyToken").then(() => {
      this.$router.push({ name: "login" });
    });
  },
};
</script>