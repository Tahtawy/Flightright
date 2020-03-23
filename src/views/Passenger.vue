<template lang="html">
  <article class="passenger py-10">
    <steps />
    <primary-passenger v-show="currentStep === 1" />
    <secondary-passenger
      v-show="currentStep === 2"
      @onSubmitSecondaryPassenger="submitSecondaryPassenger"
    />
  </article>
</template>

<script type="text/javascript">
import { mapState } from "vuex";

import Steps from "@/components/Steps";
import PrimaryPassenger from "@/components/PrimaryPassenger";
import SecondaryPassenger from "@/components/SecondaryPassenger";

export default {
  name: "Passenger",
  // share common functionality with component mixins
  mixins: [],
  // compose new components
  extends: {},
  // component properties/variables
  props: {},
  // variables
  data() {
    return {
      primaryPassengerFormSubmited: false,
      isStepTwoCompleted: false
    };
  },
  computed: {
    ...mapState({ currentStep: state => state.current_step })
  },
  // when component uses other components
  components: {
    Steps,
    PrimaryPassenger,
    SecondaryPassenger
  },
  // methods
  watch: {},
  methods: {
    submitSecondaryPassenger(secondaryPassengerData) {
      console.log(secondaryPassengerData);
    }
  },
  // component Lifecycle hooks
  beforeCreate() {},
  mounted() {}
};
</script>

<style scoped></style>
