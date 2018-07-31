import Vue from "vue";
import Router from "vue-router";
// import Hello from '@/components/Hello';
import HomeView from "@/components/HomeView";
import Assignments from "@/components/Assignments";
import Material from "@/components/Material";
import Papers from "@/components/Papers";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/assignments",
      name: "Assignments",
      component: Assignments
    },
    {
      path: "/material",
      name: "Material",
      component: Material
    },
    {
      path: "/papers",
      name: "Papers",
      component: Papers
    }
  ]
});
