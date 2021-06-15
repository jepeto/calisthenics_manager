<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>
<!-- ./src/App.vue -->

...
<script type="text/javascript">
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar, // register component
  },
};
</script>
<style>
@font-face {
  font-family: "Comfortaa";
  src: local("Comfortaa"),
    url(./assets/fonts/comfortaa/Comfortaa-Light.ttf) format("truetype");
}
#app {
  font-family: Comfortaa, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
