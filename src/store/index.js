import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    current_step: 1,
    is_step_one_completed: false
  },
  mutations: {
    SET_CURRENT_STEP(state, currentStep) {
      if (state.is_step_one_completed) state.current_step = currentStep;
    },
    SET_IS_STEP_ONE_COMPLETED(state, isStepOneCompleted) {
      state.is_step_one_completed = isStepOneCompleted;
    }
  },
  actions: {},
  modules: {}
});
