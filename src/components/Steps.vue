<template lang="html">
  <section class="passenger__steps flex justify-center mb-10">
    <div
      class="text-white p-4 rounded-tl rounded-bl cursor-pointer"
      :class="currentStep === 1 ? 'bg-blue-700' : 'bg-blue-500'"
      @click="setCurrentStep(1)"
    >
      Step One
    </div>
    <div
      class="text-white p-4 rounded-tr rounded-br cursor-pointer"
      :class="[(currentStep === 2 ? 'bg-blue-700' : 'bg-blue-500'), (!isStepOneCompleted ? 'cursor-not-allowed opacity-50' : '')]"
      @click="setCurrentStep(2)"
    >
      Step Two
    </div>
  </section>
</template>

<script type="text/javascript">
import { mapState, mapMutations } from "vuex";

export default {
  name: "Steps",
  // share common functionality with component mixins
  mixins: [],
  // compose new components
  extends: {},
  // component properties/variables
  props: {},
  // variables
  data() {
    return {};
  },
  computed: {
    ...mapState({
      currentStep: state => state.current_step,
      isStepOneCompleted: state => state.is_step_one_completed
    })
  },
  // when component uses other components
  components: {},
  // methods
  watch: {},
  methods: {
    ...mapMutations({ setCurrentStep: "SET_CURRENT_STEP" })
  },
  // component Lifecycle hooks
  beforeCreate() {},
  mounted() {}
};
</script>

<style scoped></style>
