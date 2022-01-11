import axios from "axios";
import { setTokenToStorage } from "@/utils";
import router from "@/router";

axios.interceptors.response.use(
  (res) => res,
  async (err) => {
    if (err.response.status === 401) {
      await router.push({
        name: "Login",
      });
    }
    return Promise.reject(err);
  }
);

export default {
  /**
   * @description - Авторизация пользователя
   * @param {Object} payload
   * @param {String} payload.login - логин пользователя
   * @param {String} payload.password - пароль пользователя
   * @returns {Promise<any>}
   */
  async login({ login, password }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const { data, headers } = await axios.post("/login", {
        login,
        password,
      });
      axios.defaults.headers.common["token"] = headers.token;
      setTokenToStorage(headers.token);
      return data;
    } catch (e) {
      throw e;
    }
  },

  async getHistory() {
    // eslint-disable-next-line no-useless-catch
    try {
      const { data } = await axios.get("/conversionHistory");
      return data;
    } catch (e) {
      throw e;
    }
  },

  async getCourse({
    sourceCurrencyCharCode,
    targetCurrencyCharCode,
    sourceCurrencyAmount,
  }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const { data } = await axios.post("/calculateTargetCurrency", {
        sourceCurrencyCharCode,
        targetCurrencyCharCode,
        sourceCurrencyAmount,
      });
      return data;
    } catch (e) {
      throw e;
    }
  },

  async getCurrencies() {
    // eslint-disable-next-line no-useless-catch
    try {
      const { data } = await axios.get("/currencyList");
      return data;
    } catch (e) {
      throw e;
    }
  },
};
