<template lang="html">
  <div class="flex items-center justify-center">
    <div class="w-9/12 rounded overflow-hidden border border-gray-400 p-6">
      <h1
        class="text-3xl border-b pb-2 border-gray-400 font-bold capitalize mb-8"
      >
        secondary passenger
      </h1>

      <label class="flex items-center mb-4 w-4/12">
        <input type="checkbox" class="form-checkbox" v-model="addMultibleMembers" />
        <span class="ml-2">Add multible family member</span>
      </label>

      <div class="flex flex-wrap -mx-1 md:w-11/12">
        <label
          class="w-full md:w-1/3 block uppercase tracking-wide text-gray-700 text-xs font-bold px-2 mb-2"
          for="passenger-first-name">
          First Name
        </label>
        <label
          class="w-full md:w-1/3 block uppercase tracking-wide text-gray-700 text-xs font-bold px-3 mb-2"
          for="passenger-last-name">
          Last Name
        </label>
        <label
          class="w-full md:w-1/3 block uppercase tracking-wide text-gray-700 text-xs font-bold px-5 mb-2"
          for="passenger-age">
          Age
        </label>
      </div>

      <form class="secondary-passenger">
        <!-- Family member -->
        <div
          v-for="(familyMember, index) in familyMembers"
          :key="index"
          class="flex flex-wrap -mx-3">
          <div class="w-full md:w-11/12 px-3">
            <fieldset class>
              <div class="flex flex-wrap -mx-3">
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="passenger-first-name"
                    type="text"
                    placeholder="Jane"
                    v-model="familyMember.firstName"
                  />
                </div>
                <div class="w-full md:w-1/3 px-3">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="passenger-last-name"
                    type="text"
                    placeholder="Doe"
                    v-model="familyMember.lastName"
                  />
                </div>
                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="passenger-age"
                    type="number"
                    v-model="familyMember.age"
                  />
                </div>
              </div>
            </fieldset>
          </div>
          <div 
            v-if="addMultibleMembers"
            class="w-full md:w-1/12 px-3 mb-6 md:mb-0 text-red-600 cursor-pointer"
            @click="removeMemberAt(index)">
            <i class="fas fa-times-circle"></i>
          </div>
        </div>

        <p v-if="addMultibleMembers" class="underline cursor-pointer" @click="addMember">Add more members</p>

        <!-- Actions -->
        <div class="flex justify-end mt-4">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "SecondaryPassenger",
  // share common functionality with component mixins
  mixins: [],
  // compose new components
  extends: {},
  // component properties/variables
  props: {},
  // variables
  data() {
    return {
      addMultibleMembers: false,
      familyMembers: [
        {
          firstName: "",
          lastName: "",
          age: null
        }
      ]
    };
  },
  computed: {},
  // when component uses other components
  components: {},
  // methods
  watch: {},
  methods: {
    addMember() {
      this.familyMembers = [
        ...this.familyMembers,
        {
          firstName: "",
          lastName: "",
          age: null
        }
      ];
    },
    removeMemberAt(memberIndex) {
      this.familyMembers.splice(memberIndex, 1);
      console.log("this.familyMembers", this.familyMembers);
    }
  },
  // component Lifecycle hooks
  beforeCreate() {},
  mounted() {}
};
</script>

<style scoped></style>
