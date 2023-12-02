import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
export type FormValues = {
  email: string;
  password: string;
  repeatPassword?: string;
};
export function LoginForm() {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>();
  const inputStyle: string =
    "bg-white rounded-xl p-3 ring-2 ring-blue-600 focus:outline-none w-full";
  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <form
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
            type="password"
            id="password"
            placeholder="Пароль"
            onBlur={() => trigger("password")}
          />
          {/*проверка пароля временна. сменим для продакшена. будет проверка по базе данных */}
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
              ? `${inputStyle} cursor-pointer font-bold`
              : `${inputStyle} cursor-default bg-gray-400 ring-0`
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
