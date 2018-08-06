<template>

  <div>

    <h1 class="container">{{ today }}</h1>
    <app-day-selector 
      :days="days"
      :timetable-child="timetable"
      @viewDayWasUpdated="abhi = $event" /> 

    <div v-if="abhi">
      <div
        v-for="(subj, index) in abhi[1]" 
        :key="index"
        class="container">
        <div
          v-if="abhi[1][index].subject"
          class="demo-card-wide mdl-card mdl-shadow--3dp">
          <div class="mdl-card__title">
            <div>
              <span class="mdl-chip">
                <span class="mdl-chip__text">{{ index + 1 }}</span>
              </span>
            </div>
            <h2 class="mdl-card__title-text ">&nbsp; {{ abhi[1][index].subject }}</h2>
          </div>
        
          <div class="mdl-card__supporting-text">
            Room: {{ abhi[1][index].room }} 
            <br>
            <div v-if="abhi[1][index].teacher">Teacher: {{ abhi[1][index].teacher }}</div>
            Time: {{ abhi[1][index].time }}
          </div>
        </div>
      </div>
    </div>
  
  </div>

</template>
<script>
import data from "../data.js";
import DaySelector from "./DaySelector.vue";

export default {
  components: {
    "app-day-selector": DaySelector
  },

  data() {
    return {
      days : ["Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"],   
      viewDayParent: null,
      timetable: data.Timetable_SE_A,
      abhi: null,
      aaa: 1
    };
  }
};
</script>

<style scoped>
.container {
  padding: 8px;
}
.demo-card-wide.mdl-card {
  width: 100%;
  min-height: 0;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}
</style>