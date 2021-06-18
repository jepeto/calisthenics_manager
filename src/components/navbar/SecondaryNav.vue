<template>
  <!-- mainpart-->
  <div class="hidden lg:flex space-x-1 items-center">
    <!-- Icon -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-8 w-8 afterLarge:hidden hover:text-gray-400 cursor-pointer"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    <!-- Menu -->
    <div
      class="
        hidden
        afterLarge:flex afterLarge:items-center afterLarge:block
        text-sm
        h-full
      "
    >
      <router-link
        class="nav-link h-full"
        to="/login"
        v-if="!$store.getters.getUserState"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Login</span></router-link
      >

      <router-link
        class="nav-link h-full"
        to="/signup"
        v-if="!$store.getters.getUserState"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
          />
        </svg>
        <span>Sign Up</span></router-link
      >
      <router-link
        class="nav-link h-full"
        to="/"
        v-if="$store.getters.getUserState"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clip-rule="evenodd"
          />
        </svg>
        <span>Logout</span></router-link
      >
    </div>
  </div>
  <!-- user -->
  <!-- <UserNav class="hidden" /> -->
</template>

<script>
// import UserNav from "./UserNav.vue";
export default {
  //   components: {
  //     UserNav,
  //   },
};
</script>

<style></style>
