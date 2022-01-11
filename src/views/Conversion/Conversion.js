import {
  VRow,
  VCol,
  VCard,
  VContainer,
  VCardTitle,
  VCardText,
  VTextField,
  VForm,
  VBtn,
  VSelect,
} from "vuetify/lib/components";

import convertAPI from "@/api";

export default {
  components: {
    VRow,
    VCol,
    VCard,
    VContainer,
    VCardTitle,
    VCardText,
    VTextField,
    VForm,
    VBtn,
    VSelect,
  },
  data: () => ({
    valid: true,
    currencies: [],
    currencyFrom: null,
    currencyTo: null,
    courseFrom: null,
    courseTo: null,
  }),

  async mounted() {
    await this.getCurrencies();
  },

  methods: {
    async getCurrencies() {
      try {
        const data = await convertAPI.getCurrencies();
        await this.$set(this, "currencies", data);
      } catch (e) {
        console.log(e);
      }
    },

    async submit() {
      await this.doConvert();
    },

    async doConvert() {
      try {
        this.courseTo = await convertAPI.getCourse({
          sourceCurrencyCharCode: this.currencyFrom,
          targetCurrencyCharCode: this.currencyTo,
          sourceCurrencyAmount: this.courseFrom,
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
