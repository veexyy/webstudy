import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useState } from "react";
import axiosApiInterceptor from "../../api";
import { inputStyle } from "../../components/shared/consts";
export type handleAuthType = {
  email: string;
  password: string;
};
export type FormValues = {
  email: string;
  password: string;
  repeatPassword?: string;
};
export let userData = {
  email: "",
  idToken: "",
  localId: "",
  refreshToken: "",
};
export function LoginForm() {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  const [showPass, setShowPass] = useState(false);
  const onSubmit = async (payload: any) => {
    try {
      let res = await axiosApiInterceptor.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          ...payload,
          returnSecureToken: true,
        }
      );
      navigate("/account");
      reset();
      if (!res) return;
      else {
        userData = {
          email: res.data.email,
          idToken: res.data.idToken,
          localId: res.data.localId,
          refreshToken: res.data.refreshToken,
        };
        localStorage.setItem("email", res.data.email);
        localStorage.setItem(
          "tokens",
          JSON.stringify({
            idToken: userData.idToken,
            refreshToken: userData.refreshToken,
          })
        );
      }
    } catch (err: any) {
      return alert(err);
    }
    return userData;
  };
  return (
    <>
      <form
        data-testid="login-form"
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        className="font-montserrat flex flex-col items-center justify-center mx-auto min-h-[90vh] max-w-[500px] px-3 gap-3"
      >
        <h1 className="text-white font-bold text-2xl mobile:text-3xl font-montserrat text-center mb-5 ">
          Добро пожаловать!
        </h1>
        <div className="relative w-full mb-5">
          <input
            {...register("email", {
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: "Неправильная почта",
              },
              required: "Укажи почту",
            })}
            onBlur={() => trigger("email")}
            className={inputStyle}
            placeholder="E-mail"
            type="email"
          />
          <p className="text-red-500 font-montserrat text-xs absolute">
            {errors.email?.message}
          </p>
        </div>
        <div className="relative w-full mb-5">
          <input
            {...register("password", {
              required: "Укажи пароль",
            })}
            className={inputStyle}
            type={!showPass ? "password" : "text"}
            id="password"
            placeholder="Пароль"
            onBlur={() => trigger("password")}
          />
          <RiEyeCloseLine
            className={
              !showPass
                ? "absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
                : "hidden"
            }
            onClick={() => setShowPass(!showPass)}
          ></RiEyeCloseLine>
          <RiEyeLine
            className={
              showPass
                ? "absolute right-2 w-5 h-5 top-1/2 -translate-y-1/2 cursor-pointer"
                : " hidden"
            }
            onClick={() => setShowPass(!showPass)}
          ></RiEyeLine>
          <p className="text-red-500 font-montserrat text-xs absolute">
            {errors.password?.message}
          </p>
        </div>
        <Link to="/forgot-password" className="text-white font-bold">
          Забыл пароль?
        </Link>
        <button
          disabled={!isValid}
          className={
            isValid
              ? `${inputStyle} cursor-pointer`
              : `${inputStyle} cursor-default text-gray-500  bg-gray-400 ring-0`
          }
          type="submit"
        >
          Войти
        </button>
        <div className="text-white font-bold">
          Нет аккаунта?&nbsp;
          <Link to="/register" className="underline underline-offset-4">
            Регистрация
          </Link>
        </div>
      </form>
    </>
  );
}
