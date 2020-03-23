<template lang="html">
  <div class="flex items-center justify-center">
    <div class="w-9/12 rounded overflow-hidden border border-gray-400 p-6">
      <h1
        class="text-3xl border-b pb-2 border-gray-400 font-bold capitalize mb-8"
      >
        primary passenger
      </h1>
      <ValidationObserver tag="div" ref="primaryFormObserver" v-slot="{ invalid }">
        <form
          class="primary-passenger"
          @submit.prevent="submitPrimaryPassenger()"
          action="#"
        >
          <!-- Full Name -->
          <fieldset>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="passenger-first-name"
                >
                  First Name <span class="text-red-500">*</span>
                </label>
                <ValidationProvider name="first name" mode="aggressive" rules="required" v-slot="{ errors }" tag="div">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="passenger-first-name"
                    name="first name"
                    type="text"
                    placeholder="Jane"
                    v-model="primaryPassengerData.firstName"
                    :class="{'border-red-500': errors.length}"
                  />
                  <p v-if="errors.length" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="passenger-last-name"
                >
                  Last Name <span class="text-red-500">*</span>
                </label>
                <ValidationProvider name="last name" mode="aggressive" rules="required" v-slot="{ errors }" tag="div">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="passenger-last-name"
                    name="last name"
                    type="text"
                    placeholder="Doe"
                    v-model="primaryPassengerData.lastName"
                    :class="{'border-red-500': errors.length}"
                  />
                  <p v-if="errors.length" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>
            </div>
          </fieldset>

          <!-- Email, Age And Phone -->
          <fieldset>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="passenger-email"
                >
                  Email <span class="text-red-500">*</span>
                </label>
                <ValidationProvider name="email" mode="aggressive" rules="required|email" v-slot="{ errors }" tag="div">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="passenger-email"
                    type="text"
                    placeholder="example@mail.com"
                    v-model="primaryPassengerData.email"
                    :class="{'border-red-500': errors.length}"
                  />
                  <p v-if="errors.length" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="passenger-age"
                >
                  Age <span class="text-red-500">*</span>
                </label>
                <ValidationProvider name="age" mode="aggressive" :rules="{required: true, regex: /^([0-9]+)$/}" v-slot="{ errors }" tag="div">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="passenger-age"
                    name="age"
                    type="text"
                    v-model="primaryPassengerData.age"
                    :class="{'border-red-500': errors.length}"
                  />
                  <p v-if="errors.length" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>
              <div class="w-full md:w-1/3 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="passenger-phone"
                >
                  Phone <span class="text-red-500">*</span>
                </label>
                <ValidationProvider name="phone" mode="aggressive" :rules="{required: true, min: 11}" v-slot="{ errors }" tag="div">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="passenger-phone"
                    name="phone"
                    type="text"
                    placeholder="must be 11 number ex: 01025414587"
                    v-model="primaryPassengerData.phone"
                    :class="{'border-red-500': errors.length}"
                  />
                  <p v-if="errors.length" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>
            </div>
          </fieldset>

          <!-- Address -->
          <fieldset>
            <div class="flex flex-wrap -mx-3 mb-2">
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="passenger-country"
                >
                  Country <span class="text-red-500">*</span>
                </label>
                <div class="relative">
                  <ValidationProvider name="country" mode="aggressive" rules="required" v-slot="{ errors }" tag="div">
                    <select
                      class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="passenger-country"
                      name="country"
                      v-model="primaryPassengerData.country"
                      :class="{'border-red-500': errors.length}"
                    >
                      <option value=""></option>
                      <option value="1">New Mexico</option>
                      <option value="2">Missouri</option>
                      <option value="3">Texas</option>
                    </select>
                    <div
                      class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path
                          d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                        />
                      </svg>
                    </div>
                    <p v-if="errors.length" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                  </ValidationProvider>
                </div>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="passenger-street"
                >
                  Street <span class="text-red-500">*</span>
                </label>
                <ValidationProvider name="street" mode="aggressive" :rules="{required: true}" v-slot="{ errors }" tag="div">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="passenger-street"
                    name="street"
                    type="text"
                    placeholder="Albuquerque"
                    v-model="primaryPassengerData.street"
                    :class="{'border-red-500': errors.length}"
                  />
                  <p v-if="errors.length" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>
              <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="passenger-zip"
                >
                  Index/Zip <span class="text-red-500">*</span>
                </label>
                <ValidationProvider name="ZIP" mode="aggressive" :rules="{required: true}" v-slot="{ errors }" tag="div">
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="passenger-zip"
                    name="ZIP"
                    type="text"
                    placeholder="90210"
                    v-model="primaryPassengerData.zip"
                    :class="{'border-red-500': errors.length}"
                  />
                  <p v-if="errors.length" class="text-red-500 text-xs italic">{{ errors[0] }}</p>
                </ValidationProvider>
              </div>
            </div>
          </fieldset>

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
import { mapState, mapMutations } from "vuex";

import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { required, email, min, regex } from "vee-validate/dist/rules";

extend("required", required);
extend("email", email);
extend("min", min);
extend("regex", regex);

export default {
  name: "PrimaryPassenger",
  // share common functionality with component mixins
  mixins: [],
  // compose new components
  extends: {},
  // component properties/variables
  props: {
    onSubmitPrimaryPassenger: Function
  },
  // variables
  data() {
    return {
      primaryPassengerData: {
        firstName: "",
        lastName: "",
        email: "",
        age: null,
        phone: null,
        country: null,
        street: "",
        zip: ""
      }
    };
  },
  computed: {
    ...mapState({ isStepOneCompleted: state => state.is_step_one_completed })
  },
  // when component uses other components
  components: {
    ValidationProvider,
    ValidationObserver
  },
  // methods
  watch: {
    primaryPassengerData: {
      async handler() {
        if (this.isStepOneCompleted) {
          const isValid = await this.$refs.primaryFormObserver.validate();
          if (!isValid) this.setIsStepOneCompleted(false);
        }
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations({
      setIsStepOneCompleted: "SET_IS_STEP_ONE_COMPLETED",
      setCurrentStep: "SET_CURRENT_STEP"
    }),
    submitPrimaryPassenger() {
      this.setIsStepOneCompleted(true);
      this.setCurrentStep(2);
    }
  },
  // component Lifecycle hooks
  beforeCreate() {},
  mounted() {}
};
</script>

<style scoped></style>
