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
          v-for="(day, dayIndex) in days"
          :key="dayIndex"
          class="mdl-menu__item" 
          :data-val="day">{{ day }}</li>
      </ul>
    </div>

  </div>

</template>

<script>
export default {
  props: {
    days: {
      type: Array,
      default() {
        return ["Days empty lole"]
      }
    },
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
      today: null,
      abhi: ""
    }
  },

  beforeMount(){
    this.getTodaysDay()
    this.abhi = this.timetableChild[this.viewDay];
  },
  
  created(){
      this.daysRemoved()
      console.log(this.viewDay)
  },

  methods: {
    daysRemoved() {
      var i = this.days.indexOf(this.today)
      this.days.splice(i, 1)
    },
    viewDayUpdated(event){
      this.abhi = this.timetableChild[this.viewDay];
      this.$emit("viewDayWasUpdated", [this.viewDay, this.abhi])
    },
    getTodaysDay() {
      var d = new Date();
      var dayNumber = d.getDay();
      this.today = this.days[dayNumber];
      this.viewDay = this.today;
    }

  }
    
}
</script>