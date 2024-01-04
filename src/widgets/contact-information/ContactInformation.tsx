import WidgetTitle from "../../components/shared/widgettitle";
import { useForm } from "react-hook-form";
import { FormValues } from "../paywidget/components/PayForm";
import { useState } from "react";
export function ContactInformation() {
  const [showMessage, setShowMessage] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    reset();
  };
  const inputStyle =
    "border border-white bg-transparent rounded-xl p-3 ring-2 ring-blue-600 focus:outline-none w-full";
  return (
    <div className="flex flex-col border-white border rounded-md bg-transparent mx-auto max-w-[1100px] pb-4 pl-4 pr-4 md:pb-10 md:pl-10 md:pr-10">
      <WidgetTitle>Контактная информация</WidgetTitle>
      <div className="font-montserrat text-white border border-white rounded-md sm:p-5 pb-5">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:my-10 my-5 gap-5 sm:gap-12">
          <div className="font-bold text-xl sm:text-2xl ml-5 md:ml-10">
            Поможем в выборе!
            <div className="sm:text-xl text-sm">Даже если очень сложно</div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col sm:grid grid-flow-row-dense grid-cols-2 sm:gap-7 gap-5"
          >
            <div className="relative col-span-2">
              <input
                {...register("name", {
                  pattern: {
                    value:
                      /^[a-zA-Zа-яА-ЯёЁ]+(([' -][a-zA-Zа-яА-ЯёЁ ])?[a-zA-Zа-яА-ЯёЁ]*) *$/,
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
            <div className=" relative col-span-2">
              <input
                className={
                  isValid
                    ? "border border-white px-12 py-2 rounded-md font-bold cursor-pointer mt-5 w-full"
                    : "border border-gray-400 px-12 py-2 rounded-md font-bold text-gray-400 mt-5 w-full"
                }
                type="submit"
                value="Отправить"
                disabled={!isValid}
                onClick={() => setShowMessage(true)}
              />
              {showMessage && (
                <p className="absolute text-blue-600 font-montserrat text-xs -top-2">
                  Мы отправили вам заявку!
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
