<!--./src/components/NavBar.vue -->

<template>
  <header>
    <nav class="navbar flex h-20 border-b">
      <div class="flex flex-auto">
        <router-link to="/">Home</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/equipment">Equipment</router-link>
        <router-link to="/nutrition">Nutrition</router-link>
        <router-link to="/exercises">Exercises</router-link>
        <router-link to="/parks">Parks</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>
      <div class="flex flex-grow justify-end">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Sign up</router-link>
        <router-link to="/logout">Logout</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar a {
  display: flex;
  margin-left: 1rem;
  margin-right: 1rem;
  justify-content: center;
  align-items: center;
}

.navbar a:hover {
  border-bottom: 2px solid #1a7676;
}
</style>
