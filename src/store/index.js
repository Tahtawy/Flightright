import Vue from "vue";

import Vuex from "vuex";
Vue.use(Vuex);

import Notifications from "vue-notification";
Vue.use(Notifications);
let notifier = new Vue();

const defaultPrimaryPassengerData = {
  firstName: "",
  lastName: "",
  email: "",
  age: null,
  phone: null,
  country: null,
  street: "",
  zip: ""
};

const defaultSecondaryPassengerData = [
  {
    firstName: "",
    lastName: "",
    age: null
  }
];

export default new Vuex.Store({
  state: {
    current_step: 1,
    is_step_one_completed: false,
    primary_passenger_data: { ...defaultPrimaryPassengerData },
    secondary_passenger_data: JSON.parse(
      JSON.stringify(defaultSecondaryPassengerData)
    )
  },
  mutations: {
    SET_CURRENT_STEP(state, currentStep) {
      if (state.is_step_one_completed) state.current_step = currentStep;
    },
    SET_IS_STEP_ONE_COMPLETED(state, isStepOneCompleted) {
      state.is_step_one_completed = isStepOneCompleted;
    },
    SET_PRIMARY_PASSENGER_DATA(state, primaryPassengerData) {
      state.primary_passenger_data = primaryPassengerData;
    },
    SET_SECONDARY_PASSENGER_DATA(state, secondaryPassengerData) {
      state.secondary_passenger_data = secondaryPassengerData;
    }
  },
  actions: {
    submitStepOneForm({ commit }, primaryPassengerData) {
      try {
        commit("SET_PRIMARY_PASSENGER_DATA", primaryPassengerData);
        commit("SET_IS_STEP_ONE_COMPLETED", true);
        commit("SET_CURRENT_STEP", 2);
      } catch (error) {
        console.error(error);
      }
    },
    submitStepTwoForm({ commit, dispatch }, secondaryPassengerData) {
      try {
        commit("SET_SECONDARY_PASSENGER_DATA", secondaryPassengerData);
        notifier.$notify({
          group: "submitSuccess",
          title: "Success",
          text: "Passenger data submitted successfully",
          type: "success"
        });
        dispatch("resetForms");
      } catch (error) {
        console.error(error);
      }
    },
    resetForms({ commit }) {
      commit("SET_PRIMARY_PASSENGER_DATA", { ...defaultPrimaryPassengerData });
      commit(
        "SET_SECONDARY_PASSENGER_DATA",
        JSON.parse(JSON.stringify(defaultSecondaryPassengerData))
      );
    }
  },
  modules: {}
});
