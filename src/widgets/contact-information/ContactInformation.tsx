import WidgetTitle from "../../components/shared/widgettitle";
import { useForm } from "react-hook-form";
import { FormValues } from "../paywidget/components/PayForm";
export function ContactInformation() {
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };
  const inputStyle =
    "border border-white bg-transparent rounded-xl p-3 ring-2 ring-blue-600 focus:outline-none w-full";
  return (
    <div className="flex flex-col border-white border rounded-md bg-transparent mx-auto max-w-[900px] pb-10 pl-10 pr-10">
      <WidgetTitle>Контактная информация</WidgetTitle>
      <div className=" font-montserrat text-white border border-white rounded-md p-5 mt-10">
        <div className="flex justify-between items-center my-10">
          <div className="font-bold text-2xl">
            Поможем в выборе!
            <div className="text-xl">Даже если очень сложно</div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-flow-row-dense grid-cols-2 gap-7"
          >
            <div className="relative col-span-2">
              <input
                {...register("name", {
                  pattern: {
                    value:
                      /^[a-zA-Zа-яА-ЯёЁ]+(([' -][a-zA-Zа-яА-ЯёЁ ])?[a-zA-Zа-яА-ЯёЁ]*)*$/,
                    message: "Неправильное имя",
                  },
                  required: "Укажи имя",
                })}
                className={inputStyle + " w-full"}
                placeholder="Имя"
                type="text"
                id="name"
                onBlur={() => trigger("name")}
              />
              <p className="absolute text-red-500 font-montserrat text-xs">
                {errors.name?.message}
              </p>
            </div>
            <div className="relative ">
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
          </form>
        </div>
        <div className="flex justify-center">
          <input
            className="border border-white px-12 py-2 rounded-md font-bold cursor-pointer"
            type="submit"
            value="Отправить"
          />
        </div>
      </div>
    </div>
  );
}
