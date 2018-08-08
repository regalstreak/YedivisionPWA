<template>
 
  <div style="padding: 8px">

    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height">
      <input 
        id="day-selection"
        v-model.lazy="viewDay"
        type="text"
        value=""
        class="mdl-textfield__input" 
        readonly 
        @change="viewDayUpdated($event)">
      <input 
        type="hidden" 
        value="" 
        name="day-selection">
      <i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
      <label 
        for="day-selection" 
        class="mdl-textfield__label">Day</label>
      <ul 
        for="day-selection" 
        class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
        <li 
          class="mdl-menu__item" 
          :data-val="today" 
          data-selected="true">{{ today }}</li>
        <li 
          v-for="(day, dayIndex) in removedDays"
          :key="dayIndex"
          class="mdl-menu__item" 
          :data-val="day">{{ day }}</li>
      </ul>
    </div>

  </div>

</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  props: {
    timetableChild: {
      type: Object,
      default(){
        return ""
      }
    }
  },

  data(){
    return{
      viewDay: "",
      abhi: "",
      removedDays : [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"],   
    }
  },

  computed: {
    ...mapState([
    ])
  },

  created(){
      this.getTodaysDay()
      this.abhi = this.timetableChild[this.viewDay];
      this.SET_ABHI(this.abhi)
      this.daysRemoved()
  },

  methods: {
    ...mapMutations([
      "SET_TODAY",
      "SET_VIEW_DAY",
      "SET_ABHI"
    ]),

    daysRemoved() {
      var i = this.removedDays.indexOf(this.today)
      if(i !== -1){
        this.removedDays.splice(i, 1)
      }
    },
    viewDayUpdated(event){
      this.abhi = this.timetableChild[this.viewDay];
      this.SET_ABHI(this.abhi)
      this.$emit("viewDayWasUpdated", [this.viewDay, this.abhi])
      this.SET_TODAY(this.today)
      this.SET_VIEW_DAY(this.viewDay)
    },
    getTodaysDay() {
      var d = new Date();
      var dayNumber = d.getDay();
      if (dayNumber === 0) {
        this.today = "Sunday"
      } else if (dayNumber === 7) {
        this.today = "Saturday"
      } else{
        this.today = this.removedDays[dayNumber - 1];
      }
      this.viewDay = this.today;

      this.SET_TODAY(this.today)
      this.SET_VIEW_DAY(this.viewDay)
    }

  }
    
}
</script>