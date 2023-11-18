import { borderDesign } from "../../../components/shared/consts";
import { useForm } from "react-hook-form";
import PayButton from "./PayButton";
type FormValues = {
  name: string;
  phone: string;
  email: string;
};
export default function PayForm() {
  const {
    register,
    trigger,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<FormValues>();
  // здесь будут отправлятся данные на бэк
  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };
  const inputStyle =
    "bg-transparent focus:ring-0 focus:border-orange-500 hover:border-orange-500 duration-500 focus:outline-none rounded-xl sm:w-full min-w-[225px] p-3 font-montserrat sm:text-base text-xs " +
    borderDesign;
  return (
    <>
      <form
        className="flex flex-col max-w-full sm:gap-9 gap-5 sm:mt-1 items-center sm:items-stretch"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="relative">
          <input
            {...register("name", {
              pattern: {
                value:
                  /^[a-zA-Zа-яА-ЯёЁ]+(([' -][a-zA-Zа-яА-ЯёЁ ])?[a-zA-Zа-яА-ЯёЁ]*)*$/,
                message: "Неправильное имя",
              },
              required: "Укажи имя",
            })}
            className={inputStyle}
            placeholder="Имя"
            type="text"
            id="name"
            onBlur={() => trigger("name")}
          />
          <p className="absolute text-red-500 font-montserrat text-xs">
            {errors.name?.message}
          </p>
        </div>
        <div className="relative">
          <input
            {...register("phone", {
              pattern: {
                value:
                  /^(\+7|7|8)?[\s-]?\(?9\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                message: "Неправильный номер",
              },
              required: "Укажи номер",
            })}
            className={inputStyle}
            placeholder="Телефон"
            type="tel"
            id="phone"
            onBlur={() => trigger("phone")}
          />
          <p className="absolute text-red-500 font-montserrat text-xs">
            {errors.phone?.message}
          </p>
        </div>
        <div className="relative">
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
          <p className="absolute text-red-500 font-montserrat text-xs">
            {errors.email?.message}
          </p>
        </div>
        <div className="flex justify-center relative">
          <PayButton isValid={isValid} />
        </div>
      </form>
    </>
  );
}
