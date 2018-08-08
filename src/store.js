import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        today: "",
        viewDay: "",
        abhi: "",
        removedDays : [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"]
    },
    mutations: {
        SET_TODAY: (state, today) => {
            state.today = today
          },
        SET_VIEW_DAY: (state, viewDay) => {
            state.viewDay = viewDay
          },
        SET_ABHI: (state, abhi) => {
            state.abhi = abhi
        }
          
    },
    actions: {
    }
  });