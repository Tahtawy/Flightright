import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Passenger from "@/views/Passenger.vue";

Vue.use(VueRouter);

const routes = [
  {
    name: "passenger",
    path: "/",
    component: Passenger
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
