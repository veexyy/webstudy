import WidgetTitle from "../../components/shared/widgettitle";
import { inputStyle } from "../../components/shared/consts";
import { useForm } from "react-hook-form";
import { useState } from "react";
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
  const onSubmit = (data: PasswordRecoverType) => {
    console.log(data);
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
        className="font-montserrat flex flex-col items-center justify-center mx-auto min-h-[90vh] max-w-[500px] px-3 gap-8"
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
        <input
          type="submit"
          value="Отправить код"
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
