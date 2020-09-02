import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Description from "../views/Description.vue";
import ShoppingBag from "../views/ShoppingBag.vue";
import ThankYou from "../views/ThankYou.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/description/:id",
    name: "Description",
    component: Description,
  },
  {
    path: "/ShoppingBag",
    name: "ShoppingBag",
    component: ShoppingBag,
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: ThankYou,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
