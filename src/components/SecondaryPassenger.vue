<template lang="html">
  <div class="flex items-center justify-center">
    <div class="w-9/12 rounded overflow-hidden border border-gray-400 p-6">
      <h1
        class="text-3xl border-b pb-2 border-gray-400 font-bold capitalize mb-8"
      >
        secondary passenger
      </h1>

      <label class="flex items-center mb-4 w-4/12">
        <input
          type="checkbox"
          class="form-checkbox"
          v-model="addMultibleMembers"
        />
        <span class="ml-2">Add multible family member</span>
      </label>

      <div class="flex flex-wrap -mx-1 md:w-11/12">
        <label
          class="w-full md:w-1/3 block uppercase tracking-wide text-gray-700 text-xs font-bold px-2 mb-2"
          for="passenger-first-name"
        >
          First Name
        </label>
        <label
          class="w-full md:w-1/3 block uppercase tracking-wide text-gray-700 text-xs font-bold px-3 mb-2"
          for="passenger-last-name"
        >
          Last Name
        </label>
        <label
          class="w-full md:w-1/3 block uppercase tracking-wide text-gray-700 text-xs font-bold px-5 mb-2"
          for="passenger-age"
        >
          Age
        </label>
      </div>

      <ValidationObserver tag="div" ref="secondaryFormObserver" v-slot="{ invalid }" slim>
        <form
          class="secondary-passenger"
          @submit.prevent="$emit('onSubmitSecondaryPassenger', familyMembers)"
          action="#"
        >
          <!-- Family member -->
          <div
            v-for="(familyMember, index) in familyMembers"
            :key="index"
            class="flex flex-wrap -mx-3"
          >
            <div class="w-full md:w-11/12 px-3">
              <fieldset>
                <div class="flex flex-wrap -mx-3">
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        :id="`passenger-first-name-${index}`"
                        name="first name"
                        type="text"
                        placeholder="Jane"
                        v-model="familyMember.firstName"
                        :class="{'border-red-500': errors.length}"
                      />
                      <p v-if="errors.length" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                    </ValidationProvider>
                  </div>
                  <div class="w-full md:w-1/3 px-3">
                    <ValidationProvider mode="aggressive" rules="required" v-slot="{ errors }">
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        :id="`passenger-last-name-${index}`"
                        name="last name"
                        type="text"
                        placeholder="Doe"
                        v-model="familyMember.lastName"
                        :class="{'border-red-500': errors.length}"
                      />
                      <p v-if="errors.length" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                    </ValidationProvider>
                  </div>
                  <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <ValidationProvider mode="aggressive" :rules="{required: true, regex: /^([0-9]+)$/}" v-slot="{ errors }">
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        :id="`passenger-age-${index}`"
                        name="age"
                        type="number"
                        v-model="familyMember.age"
                        :class="{'border-red-500': errors.length}"
                      />
                      <p v-if="errors.length" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                    </ValidationProvider>
                  </div>
                </div>
              </fieldset>
            </div>
            <div
              v-if="addMultibleMembers"
              class="w-full md:w-1/12 px-3 mb-6 md:mb-0 text-red-600 cursor-pointer"
              @click="removeMemberAt(index)"
            >
              <i class="fas fa-times-circle"></i>
            </div>
          </div>

          <p
            v-if="addMultibleMembers"
            class="underline cursor-pointer"
            @click="addMember"
          >
            Add more members
          </p>

          <!-- Actions -->
          <div class="flex justify-end mt-4">
            <button
              type="submit"
              :disabled="invalid"
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              :class="{'opacity-50 cursor-not-allowed': invalid}"
            >
              Submit
            </button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script type="text/javascript">
// import { mapState, mapMutations } from "vuex";

import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, min, regex } from "vee-validate/dist/rules";

extend("required", required);
extend("email", email);
extend("min", min);
extend("regex", regex);

export default {
  name: "SecondaryPassenger",
  // share common functionality with component mixins
  mixins: [],
  // compose new components
  extends: {},
  // component properties/variables
  props: {
    onSubmitSecondaryPassenger: Function
  },
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
  components: {
    ValidationProvider,
    ValidationObserver
  },
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
