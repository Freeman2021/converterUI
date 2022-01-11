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
  VMenu,
  VDatePicker,
  VDataTable,
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
    VDataTable,
    VMenu,
    VDatePicker,
  },
  data: () => ({
    valid: true,
    historyOfConversion: [],
    currencies: [],
    headers: [
      {
        text: "Исходная валюта",
        value: "sourceCurrencyCharCode",
      },
      {
        text: "Целевая валюта",
        value: "targetCurrencyCharCode",
      },
      {
        text: "Исходная сумма",
        value: "sourceCurrencyAmount",
      },
      {
        text: "Получаемая сумма",
        value: "targetCurrencyAmount",
      },
      {
        text: "Дата",
        value: "date",
      },
    ],
  }),
  async mounted() {
    await this.loadHistory();
  },
  methods: {
    async loadHistory() {
      try {
        this.historyOfConversion = await convertAPI.getHistory();
      } catch (e) {
        console.log(e);
      }
    },
    // async loadCurrencies() {
    //   try {
    //     this.currencies = await convertAPI.getCurrencies();
    //   } catch (e) {
    //     console.log(e);
    //   }
    // },
  },
};
