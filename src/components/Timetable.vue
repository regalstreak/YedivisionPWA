<template>

  <div>
    
    <h1 class="container">{{ today }}</h1>
    <app-day-selector 
      :days="days"
      :today="today"
      @viewDayWasUpdated="viewDayParent = $event" /> 

    <div
      v-for="(subj, index) in abhi" 
      :key="index"
      class="container">
      <div
        v-if="abhi[index].subject"
        class="demo-card-wide mdl-card mdl-shadow--3dp">
        <div class="mdl-card__title">
          <div>
            <span class="mdl-chip">
              <span class="mdl-chip__text">{{ index + 1 }}</span>
            </span>
          </div>
          <h2 class="mdl-card__title-text ">&nbsp; {{ abhi[index].subject }}</h2>
        </div>
        
        <div class="mdl-card__supporting-text">
          Room: {{ abhi[index].room }} 
          <br>
          <div v-if="abhi[index].teacher">Teacher: {{ abhi[index].teacher }}</div>
          Time: {{ abhi[index].time }}
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
      today: null,
      viewDayParent: null,
      timetable: data.Timetable_SE_A,
      abhi: null
    };
  },
  watch: {
    
  },

  beforeMount() {
    this.getTodaysDay();
    this.abhi = this.timetable[this.viewDayParent];
    console.log(this.viewDayParent + "bm")
  },


/*  methods: {
    getTodaysDay() {
      var d = new Date();
      var dayNumber = d.getDay();
      this.today = this.days[dayNumber];
      this.viewDayParent = this.today;
    }
  }, */
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