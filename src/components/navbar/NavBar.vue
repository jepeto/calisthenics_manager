<!--./src/components/NavBar.vue -->

<template>
  <div>
    <nav class="bg-white">
      <div class="px-8 mx-auto border-b border-black shadow-lg">
        <div class="flex justify-evenly md:justify-between">
          <div class="flex space-x-4">
            <!--Logo-->
            <LogoNav />

            <!--Primary Nav-->
            <PrimaryNav />
          </div>

          <!--Secondary Nav-->
          <SecondaryNav />

          <!-- Mobile Button Goes Here -->
          <HamburgerIcon />
        </div>
        <!--Movile View-->
        <MobileMenu />
      </div>
    </nav>
  </div>
</template>

<script>
import MobileMenu from "./MobileMenu.vue";
import HamburgerIcon from "./HamburgerIcon.vue";
import PrimaryNav from "./PrimaryNav.vue";
import LogoNav from "./LogoNav.vue";
import SecondaryNav from "./SecondaryNav.vue";

export default {
  name: "NavBar",
  components: {
    MobileMenu,
    HamburgerIcon,
    PrimaryNav,
    LogoNav,
    SecondaryNav,
  },
  mounted() {},
};
</script>

<style scoped></style>
