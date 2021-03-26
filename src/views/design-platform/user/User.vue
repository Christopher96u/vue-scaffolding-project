<template>
  <div>
<!-- User.vue = Profile.vue   -->
    <h1>User View</h1>
    <h2>here will get user profile(menu and data)</h2>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: "User"
};
</script>

<style scoped>

</style>
