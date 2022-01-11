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
  },
  data: () => ({
    valid: true,
    login: "",
    loginRules: [(v) => !!v || "'Логин' is required"],
    password: "",
    passwordRules: [(v) => !!v || "'Password' is required"],
  }),
  methods: {
    async submit() {
      try {
        const validation = this.$refs.form.validate();
        if (!validation) throw Error("Validation Error");
        const { login, password } = this;

        const data = await convertAPI.login({
          login,
          password,
        });
        await this.$router.push({
          name: "Root",
        });
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    },
  },
};
