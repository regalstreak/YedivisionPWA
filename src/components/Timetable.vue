<template>

  <div>

    <!--
    <h1 class="container">{{ today }}</h1>
    <div 
      v-for="(picture, index) in pictures" 
      :key="index"
      class="container">
      <div class="demo-card-wide mdl-card mdl-shadow--3dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">{{ picture.comment }}</h2>
        </div>
        
        <div class="mdl-card__supporting-text">
          {{ picture.info }}
        </div>
      </div>
    </div>
    -->

    <h1 class="container">{{ today }}</h1>
    <div 
      v-for="(subj, index) in abhi" 
      :key="index"
      class="container">
      <div class="demo-card-wide mdl-card mdl-shadow--3dp">
        <div class="mdl-card__title">
          <h2 class="mdl-card__title-text">{{ abhi[index] }}</h2>
        </div>
        
        <div class="mdl-card__supporting-text">
          {{ abhi.index }}
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
      pictures: data.pictures,
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
  height: 100px;
}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}
</style>