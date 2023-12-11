import { inputStyle } from "../../components/shared/consts";
import { useForm } from "react-hook-form";
import { FormValues } from "../login/LoginForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import axiosApiInterceptor from "../../api";
export type UserType = {
  email: string;
  uid: string;
  accessToken: string;
};
let userData = {
  email: "",
  token: "",
  localId: "",
  refreshToken: "",
};
export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  const onSubmit = async (payload: any) => {
    try {
      let res = await axiosApiInterceptor.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          ...payload,
          returnSecureToken: true,
        }
      );
      navigate("/courses");
      reset();
      userData = {
        email: res.data.email,
        token: res.data.idToken,
        localId: res.data.localId,
        refreshToken: res.data.refreshToken,
      };
      localStorage.setItem(
        "tokens",
        JSON.stringify({
          idToken: userData.token,
          refreshToken: userData.refreshToken,
        })
      );
    } catch (error: any) {
      switch (error.response.data.error.message) {
        case "EMAIL_EXISTS":
          alert("Пользователь с такой почтой уже существует");
          break;
        case "OPERATION_NOT_ALLOWED":
          alert('Операция "Регистрация" не разрешена');
          break;
        default:
          alert("Ошибка");
          break;
      }
    }
    return userData;
  };
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      method="post"
      className="font-montserrat flex flex-col items-center justify-center mx-auto min-h-[90vh] max-w-[500px] px-3 gap-3 relative z-[1]"
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
            minLength: {
              value: 8,
              message: "Минимальная длина пароля 8 символов",
            },
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
        {/*проверка пароля временна. сменим для продакшена. будет проверка по базе данных */}
        <p className="text-red-500 font-montserrat text-xs absolute">
          {errors.password?.message}
        </p>
      </div>
      <div className="relative w-full mb-5">
        <input
          {...register("repeatPassword", {
            required: "Повторите пароль",
            validate: (value) =>
              value === watch("password") ? true : "Пароли не совпадают",
          })}
          type={showConfirmPass ? "text" : "password"}
          placeholder="Повторите пароль"
          className={inputStyle}
          onBlur={() => trigger("repeatPassword")}
        />
        <p className="text-red-500 font-montserrat text-xs absolute">
          {errors.repeatPassword?.message}
        </p>
        <RiEyeCloseLine
          className={
            !showConfirmPass
              ? "absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer"
              : "hidden"
          }
          onClick={() => setShowConfirmPass(!showConfirmPass)}
        ></RiEyeCloseLine>
        <RiEyeLine
          className={
            showConfirmPass
              ? "absolute right-2 w-5 h-5 top-1/2 -translate-y-1/2 cursor-pointer"
              : " hidden"
          }
          onClick={() => setShowConfirmPass(!showConfirmPass)}
        ></RiEyeLine>
      </div>
      <Link to="/forgot-password" className="text-white font-bold">
        Забыл пароль?
      </Link>
      <button
        disabled={!isValid}
        className={
          isValid
            ? `${inputStyle} cursor-pointer font-bold`
            : `${inputStyle} cursor-default bg-gray-400 ring-0`
        }
        type="submit"
        onClick={() => onSubmit}
      >
        Регистрация
      </button>
      <div className="text-white font-bold">
        Есть аккаунт?&nbsp;
        <Link to="/login" className="underline underline-offset-4">
          Войти
        </Link>
      </div>
    </form>
  );
}
