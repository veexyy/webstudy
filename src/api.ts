import axios from "axios";
import { useNavigate } from "react-router-dom";

const axiosApiInterceptor = axios.create();

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
axiosApiInterceptor.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err: any) => {
    const req = err.config;
    if (err.response.status === 401 && !req._retry) {
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
        console.log(newTokens.data);
        localStorage.setItem(
          "tokens",
          JSON.stringify({
            idToken: newTokens.data.id_token,
            refreshToken: newTokens.data.refresh_token,
          })
        );
      } catch (err) {
        const nav = useNavigate();

        localStorage.removeItem("tokens");
        nav("/login");
      }
    }
    console.log(req, err);
  }
);

export default axiosApiInterceptor;
