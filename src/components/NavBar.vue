<!--./src/components/NavBar.vue -->

<template>
  <nav class="bg-white">
    <div class="px-8 mx-auto border-b border-black shadow-lg">
      <div class="flex justify-between">
        <div class="flex space-x-4">
          <!--Logo-->
          <div>
            <router-link to="/" class="flex items-center py-5 px-3 text-3xl"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-5 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="font-bold">CalistheniX</span></router-link
            >
          </div>

          <!--Primary Nav-->
          <div class="hidden lg:flex space-x-1 items-center">
            <router-link
              class="
                flex
                space-x-2
                py-7
                px-3
                border-b-2
                hover:border-indigo-400
                border-transparent
                transition
                duration-500
              "
              to="/dashboard"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
                />
              </svg>
              <span>Dashboard</span></router-link
            >
            <router-link
              class="
                flex
                space-x-2
                py-7
                px-3
                border-b-2
                hover:border-indigo-400
                border-transparent
                transition
                duration-500
              "
              to="/wiki"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Wiki</span></router-link
            >

            <router-link
              class="
                flex
                space-x-2
                py-7
                px-3
                border-b-2
                hover:border-indigo-400
                border-transparent
                transition
                duration-500
              "
              to="/contact"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span>Support</span></router-link
            >
          </div>
        </div>
        <!--Secondary Nav-->
        <div class="hidden lg:flex space-x-1 items-center">
          <router-link
            class="
              flex
              space-x-2
              py-7
              px-3
              border-b-2
              hover:border-indigo-400
              border-transparent
              transition
              duration-500
            "
            to="/login"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
            <span>Login</span></router-link
          >
          <router-link
            class="
              flex
              space-x-2
              py-7
              px-3
              border-b-2
              hover:border-indigo-400
              border-transparent
              hover:font-semibold
              transition
              duration-500
            "
            to="/signup"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
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
        </div>

        <!-- Mobile Button Goes Here -->
        <div class="lg:hidden flex items-center">
          <button class="mobile-menu-toggler">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <!--Movile View-->
      <div
        class="mobile-menu lg:hidden"
        :class="{ hidden: !$store.getters.getMenuState }"
      >
        <router-link
          class="
            flex
            space-x-2
            py-7
            px-3
            border-b-2
            hover:border-indigo-400
            border-transparent
            transition
            duration-500
          "
          to="/dashboard"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
            />
          </svg>
          <span>Dashboard</span></router-link
        >
        <router-link
          class="
            flex
            space-x-2
            py-7
            px-3
            border-b-2
            hover:border-indigo-400
            border-transparent
            transition
            duration-500
          "
          to="/wiki"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Wiki</span></router-link
        >

        <router-link
          class="
            flex
            space-x-2
            py-7
            px-3
            border-b-2
            hover:border-indigo-400
            border-transparent
            transition
            duration-500
          "
          to="/contact"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <span>Support</span></router-link
        >
        <hr />
        <router-link
          class="
            flex
            space-x-2
            py-7
            px-3
            border-b-2
            hover:border-indigo-400
            border-transparent
            transition
            duration-500
          "
          to="/login"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
          <span>Login</span></router-link
        >
        <router-link
          class="
            flex
            space-x-2
            py-7
            px-3
            border-b-2
            hover:border-indigo-400
            border-transparent
            hover:font-semibold
            transition
            duration-500
          "
          to="/signup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
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
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  mounted() {
    const menuToggler = document.querySelector("button.mobile-menu-toggler");

    menuToggler.addEventListener("click", () => {
      this.$store.dispatch("toggleMenu", !this.$store.getters.getMenuState);
    });
  },
};
</script>

<style scoped></style>
