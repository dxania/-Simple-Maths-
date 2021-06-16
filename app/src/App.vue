<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <LandingPage/>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue'
// app/src/components/LandingPage.vue
// app/src/App.vue

export default {
  name: 'App',
  components: {
    LandingPage
  }
}
</script>

<style>
body {
  background-image: linear-gradient(to bottom right, #00b8ff, white);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
