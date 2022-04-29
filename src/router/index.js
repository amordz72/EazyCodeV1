import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AuthView from "../views/AuthView.vue";
import PostView from "../views/PostView.vue";
import EazyCodeView from "../views/EazyCodeView.vue";
import PostApiView from "../views/PostApiView.vue";
import DayneView from "../views/DayneView.vue";
 


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/auth",
    name: "AuthView",
    component: AuthView,
  },
  {
    path: "/posts",
    name: "PostView",
    component: PostView,


  },
  {
    path: "/EazyCode",
    name: "EazyCodeView",
    component: EazyCodeView,

  },
  {
    path: "/DayneView",
    name: "DayneView",
    component: DayneView,

  },
  {

    path: "/postApi",

    name: "PostApiView",

    component: PostApiView,

  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
