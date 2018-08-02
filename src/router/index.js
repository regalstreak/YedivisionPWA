import Vue from "vue";
import Router from "vue-router";
import HomeView from "@/components/HomeView";
import Assignments from "@/components/Assignments";
import Material from "@/components/Material";
import Papers from "@/components/Papers";
import Subjects from "@/components/Subjects";
import Timetable from "@/components/Timetable";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView
    },
    {
      path: "/assignments",
      name: "Assignments",
      component: Assignments,
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
    },
    {
      path: "/subjects",
      name: "Subjects",
      component: Subjects
    },
    {
      path: "/timetable",
      name: "Timetable",
      component: Timetable
    }
  ]
});
