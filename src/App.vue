<template>
  <v-app id="app" dark >
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/*
.card, .card:hover {
  box-shadow: 0 2px 1px -1px rgba(255,255,255,.2),
  0 1px 1px 0 rgba(255,255,255,.14),
  0 1px 3px 0 rgba(255,255,255,.12) !important;
}
*/

</style>
