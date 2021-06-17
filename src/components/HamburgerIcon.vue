<template>
  <div class="lg:hidden flex items-center">
    <button
      class="mobile-menu-toggler hamburger hamburger--collapse"
      type="button"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    const menuToggler = document.querySelector("button.mobile-menu-toggler");

    //When hamburger icon is clicked
    menuToggler.addEventListener("click", () => {
      !this.$store.getters.getMenuState
        ? menuToggler.classList.add("is-active")
        : menuToggler.classList.remove("is-active");

      this.$store.dispatch("toggleMenu", !this.$store.getters.getMenuState);
    });
  },
};
</script>

<style scoped>
.hamburger:focus,
.hamburger:active {
  outline: none;
  box-shadow: none;
}
</style>
