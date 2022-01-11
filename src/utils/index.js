export const setTokenToStorage = (token) => {
  localStorage.setItem("token", token);
};

export const getTokenFromStorage = () => localStorage.getItem("token");
