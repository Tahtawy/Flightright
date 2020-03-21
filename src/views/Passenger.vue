<template lang="html">
  <article class="passenger py-10">
    <steps :currentStep="currentStep" @setCurrentStep="setCurrentStep" />
    <primary-passenger v-show="currentStep === 1" />
    <secondary-passenger v-show="currentStep === 2" />
  </article>
</template>

<script type="text/javascript">
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
      currentStep: 1
    };
  },
  computed: {},
  // when component uses other components
  components: {
    Steps,
    PrimaryPassenger,
    SecondaryPassenger
  },
  // methods
  watch: {},
  methods: {
    setCurrentStep(step) {
      this.currentStep = step;
    }
  },
  // component Lifecycle hooks
  beforeCreate() {},
  mounted() {}
};
</script>

<style scoped></style>
