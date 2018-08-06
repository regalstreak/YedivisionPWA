// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueAnalytics from "vue-analytics";

import 'getmdl-select/getmdl-select.min.css'
import 'getmdl-select/getmdl-select.min.js'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});

Vue.use(VueAnalytics, {
  id: "UA-90021784-2",
  router
});
