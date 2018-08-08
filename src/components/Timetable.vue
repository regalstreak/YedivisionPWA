<template>

  <div>

    <h1 class="container">{{ today }}</h1>
    <app-day-selector 
      :timetable-child="timetable"
    /> 

    <div v-if="abhi !== null">
      <div
        v-for="(subj, index) in abhi" 
        :key="index"
        class="container"
      >
        <div
          v-if="abhi[index].subject"
          class="demo-card-wide mdl-card mdl-shadow--3dp"
        >
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
  
  </div>

</template>
<script>
import data from "../data.js";
import DaySelector from "./DaySelector.vue";
import { mapState, mapMutations } from "vuex"

export default {
  components: {
    "app-day-selector": DaySelector
  },

  data() {
    return {
      timetable: data.Timetable_SE_A,
      // today: "Today"
    };
  },
  computed:{
    ...mapState([
      "today",
      "abhi"
    ])
  },
  methods: {
    ...mapMutations([

    ])
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