<!--./src/components/NavBar.vue -->

<template>
  <header>
    <div>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/dashboard">Dashboard</router-link></li>
          <li><router-link to="/equipment">Equipment</router-link></li>
          <li><router-link to="/parks">Parks</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/signup">Sign up</router-link></li>
          <li><router-link to="/logout">Logout</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>
