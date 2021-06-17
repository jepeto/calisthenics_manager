import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "Home",
      metaTags: [
        {
          name: "Description",
          content: "Home page of CalistheniX",
        },
      ],
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      title: "Dashboard",
      metaTags: [
        {
          name: "Description",
          content: "User's dashboard",
        },
      ],
    },
  },
  {
    path: "/parks",
    name: "Parks",
    component: () => import("../views/Parks.vue"),
    meta: {
      title: "Parks",
      metaTags: [
        {
          name: "Description",
          content: "Geolocation of parks near the user.",
        },
      ],
    },
  },
  {
    path: "/equipment",
    name: "Equipment",
    component: () => import("../views/Equipment.vue"),
    meta: {
      title: "Equipment",
      metaTags: [
        {
          name: "Description",
          content: "List of gym equipment",
        },
      ],
    },
  },
  {
    path: "/nutrition",
    name: "Nutrition",
    component: () => import("../views/Nutrition.vue"),
    meta: {
      title: "Nutrition",
      metaTags: [
        {
          name: "Description",
          content: "List of nutritional information",
        },
      ],
    },
  },
  {
    path: "/exercises",
    name: "Exercises",
    component: () => import("../views/Exercises.vue"),
    meta: {
      title: "Exercises",
      metaTags: [
        {
          name: "Description",
          content: "List of Exercises",
        },
      ],
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/Contact.vue"),
    meta: {
      title: "Contact",
      metaTags: [
        {
          name: "Description",
          content: "Contact page of CalistheniX",
        },
      ],
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "Login",
      metaTags: [
        {
          name: "Description",
          content: "Login page",
        },
      ],
    },
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => import("../views/Signup.vue"),
    meta: {
      title: "Registration",
      metaTags: [
        {
          name: "Description",
          content: "Registration page",
        },
      ],
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
