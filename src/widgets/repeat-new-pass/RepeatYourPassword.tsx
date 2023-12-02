import { inputStyle } from "../../components/shared/consts";
import { useForm } from "react-hook-form";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useState } from "react";
import { FormValues } from "../login/LoginForm";
import WidgetTitle from "../../components/shared/widgettitle";
export default function RepeatYourPassword() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>();
  return (
    <div className="flex flex-col max-w-[500px] justify-center items-center mx-auto min-h-[90vh] my-auto gap-5 p-3">
      <WidgetTitle>Восстановление пароля</WidgetTitle>
      <form className="flex flex-col w-full" onSubmit={handleSubmit(onSubmit)}>
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
        <input
          type="submit"
          value="Отправить"
          onClick={handleSubmit(onSubmit)}
          disabled={!isValid}
          className={
            isValid
              ? `${inputStyle} cursor-pointer font-bold font-montserrat`
              : `p-3 rounded-xl ring-0 cursor-default bg-gray-600 outline-none`
          }
        />
      </form>
    </div>
  );
}
