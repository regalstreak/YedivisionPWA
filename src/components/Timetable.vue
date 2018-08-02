<template>

  <div>
    
    <h1 class="container">{{ today }}</h1>
    <div 
      v-for="(subj, index) in abhi" 
      :key="index"
      class="container">
      <div 
        v-if="abhi[index].subject"
        class="demo-card-wide mdl-card mdl-shadow--3dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text ">{{ abhi[index].subject }}</h2>
        </div>
        
        <div class="mdl-card__supporting-text">
          Room: {{ abhi[index].room }} 
          <br>
          Teacher: {{ abhi[index].teacher }}
          <br>
          Time: {{ abhi[index].time }}
        </div>
      </div>
    </div>
  
  
  </div>

</template>
<script>
import data from "../data.js";

export default {
  data() {
    return {
      today: null,
      timetable: data.Timetable_SE_A,
      abhi: null
    };
  },

  beforeMount() {
    this.getTodaysDay();
    this.abhi = this.timetable[this.today];
  },

  methods: {
    displayDetails(id) {
      this.$router.push({ name: "detail", params: { id: id } });
    },

    getTodaysDay() {
      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];

      var d = new Date();
      var dayNumber = d.getDay();
      this.today = days[dayNumber];
    }
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