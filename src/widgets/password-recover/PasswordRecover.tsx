import WidgetTitle from "../../components/shared/widgettitle";
import { inputStyle } from "../../components/shared/consts";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import axiosApiInterceptor from "../../api";
type PasswordRecoverType = {
  email: string;
};
export default function PasswordRecover() {
  const {
    register,
    trigger,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<PasswordRecoverType>();
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  const onSubmit = (payload: PasswordRecoverType) => {
    try {
      axiosApiInterceptor.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`,
        {
          ...payload,
          requestType: "PASSWORD_RESET",
        }
      );
    } catch (error: any) {
      console.log(error.response.data.error.message);
      switch (error) {
        case "EMAIL_NOT_FOUND":
          alert("Пользователь с такой почтой не найден");
          break;
      }
    }
    reset();
  };
  const [element, setElement] = useState(false);
  const handleClick = () => {
    setElement(true);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="font-montserrat flex flex-col items-center justify-center mx-auto min-h-[85vh] max-w-[500px] px-3 gap-8 relative z-[1]"
      >
        <WidgetTitle>Восстановление пароля</WidgetTitle>
        {element && (
          <p className="text-white text-center">
            Письмо для восстановления пароля отправлено. Проверьте почту.
          </p>
        )}
        <div className="relative w-full">
          <input
            {...register("email", {
              required: "Укажи почту",
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: "Неправильная почта",
              },
            })}
            onBlur={() => trigger("email")}
            type="email"
            placeholder="Электронная почта"
            className={`${inputStyle} min-w-full`}
          />
          <p className="absolute text-red-500 text-xs">
            {errors.email?.message}
          </p>
        </div>
        <Link
          className="text-white font-montserrat font-bold hover:underline underline-offset-4"
          to="/login"
        >
          Я вспомнил пароль
        </Link>
        <input
          type="submit"
          value="Отправить письмо"
          className={
            isValid
              ? `${inputStyle} cursor-pointer font-bold`
              : `${inputStyle} cursor-default bg-gray-400 ring-0`
          }
          onClick={handleClick}
          disabled={!isValid}
        />
      </form>
    </>
  );
}
