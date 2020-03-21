<template lang="html">
  <section class="passenger__steps flex justify-center mb-10">
    <div
      class="text-white p-4 rounded-tl rounded-bl cursor-pointer"
      :class="currentStep === 1 ? 'bg-blue-700' : 'bg-blue-500'"
      @click="$emit('setCurrentStep', 1)"
    >
      Step One
    </div>
    <div
      class="text-white p-4 rounded-tr rounded-br cursor-pointer"
      :class="currentStep === 2 ? 'bg-blue-700' : 'bg-blue-500'"
      @click="$emit('setCurrentStep', 2)"
    >
      Step Two
    </div>
  </section>
</template>

<script type="text/javascript">
export default {
  name: "Steps",
  // share common functionality with component mixins
  mixins: [],
  // compose new components
  extends: {},
  // component properties/variables
  props: {
    currentStep: Number,
    setCurrentStep: Function
  },
  // variables
  data() {
    return {};
  },
  computed: {},
  // when component uses other components
  components: {},
  // methods
  watch: {},
  methods: {},
  // component Lifecycle hooks
  beforeCreate() {},
  mounted() {}
};
</script>

<style scoped></style>
