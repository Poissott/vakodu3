<template>
  <div id="app">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/Footer.vue';
import AppHeader from './components/Header.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Arial;
  text-align: center;
  color: #2c3e50;
}
</style>
