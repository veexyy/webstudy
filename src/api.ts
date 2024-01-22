import axios from "axios";
const axiosApiInterceptor = axios.create();
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
axiosApiInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err: any) => {
    const req = err.config;
    if (
      (err.response.status === 400 || err.response.status === 401) &&
      !req._retry
    ) {
      req._retry = true;
      try {
        const newTokens = await axiosApiInterceptor.post(
          `https://securetoken.googleapis.com/v1/token?key=${apiKey}`,
          {
            grant_type: "refresh_token",
            refresh_token: JSON.parse(localStorage.getItem("tokens")!)
              .refreshToken,
          }
        );
        localStorage.setItem(
          "tokens",
          JSON.stringify({
            idToken: newTokens.data.id_token,
            refreshToken: newTokens.data.refresh_token,
          })
        );
      } catch (err: any) {
        localStorage.removeItem("tokens");
      }
    }
    switch (err.response.data.error.message) {
      case "EMAIL_NOT_FOUND":
        alert("Пользователь с такой почтой не найден");
        break;
      case "INVALID_PASSWORD":
        alert("Неправильный пароль");
        break;
      case "INVALID_LOGIN_CREDENTIALS":
        alert("Неправильный логин или пароль");
        break;
      case "TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.":
        alert(
          "Аккаунт деактивирован на время из-за многократных неуспешных попыток входа. Попробуйте позже"
        );
        break;
      case "TOO_MANY_ATTEMPTS_TRY_LATER":
        alert("Очень много попыток. Повторите попытку позже.");
        break;
      case "EMAIL_EXISTS":
        alert("Пользователь с такой почтой уже существует");
        break;
      case "OPERATION_NOT_ALLOWED":
        alert('Операция "Регистрация" не разрешена');
        break;
      default:
        alert("Ошибка в форме логина");
        break;
    }
  }
);

export default axiosApiInterceptor;
