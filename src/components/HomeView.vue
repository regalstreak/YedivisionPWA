<template>
  <div>
    <h5 class="container">Note: App raw and under construction please be patient lmao </h5>
    <h6 class="container">JavaScript is spaghetti code. Change my mind.</h6>

    <app-timetable />

  </div>
</template>

<script>
import Timetable from "./Timetable.vue";
export default {
  components: {
    "app-timetable": Timetable
  }
};
</script>


<style scoped>

.container {
  padding: 8px
}
.list {
  width: 100%;
  padding: 0;
}
</style>
