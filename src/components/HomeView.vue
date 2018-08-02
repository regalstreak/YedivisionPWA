<template>
  <div>
    <h5 class="container">Note: App raw and under construction please be patient lmao </h5>

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
