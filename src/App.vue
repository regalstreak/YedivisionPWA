<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Yedivision</span>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Yedivision</span>
      <nav class="mdl-navigation">
        <router-link 
          class="mdl-navigation__link"
          to="/" 
          @click.native="hideMenu"
        >Home</router-link>

        <router-link
          class="mdl-navigation__link"
          to="/timetable"
          @click.native="hideMenu"
        >Timetable</router-link>

        <router-link 
          class="mdl-navigation__link" 
          to="/assignments" 
          @click.native="hideMenu"
        >Assignments</router-link>

        <router-link 
          class="mdl-navigation__link" 
          to="/papers" 
          @click.native="hideMenu"
        >Question banks and papers</router-link>

        <router-link 
          class="mdl-navigation__link" 
          to="/material" 
          @click.native="hideMenu"
        >Study material</router-link>
      
      </nav>
    </div>
    <main class="mdl-layout__content">
      <div class="page-content">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
require("material-design-lite");
export default {
  name: "App",
  methods: {
    hideMenu: function() {
      document
        .getElementsByClassName("mdl-layout__drawer")[0]
        .classList.remove("is-visible");
      document
        .getElementsByClassName("mdl-layout__obfuscator")[0]
        .classList.remove("is-visible");
    }
  }
};
</script>


<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
@import url("https://code.getmdl.io/1.3.0/material.blue-red.min.css");
</style>
