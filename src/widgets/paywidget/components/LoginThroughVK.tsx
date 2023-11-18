import { borderDesign } from "../../../components/shared/consts";

export default function LoginThroughVK() {
  return (
    <>
      <a href="https://vk.com" className="flex justify-center">
        <button
          className={
            borderDesign +
            "font-montserrat text-xs sm:text-base min-w-[225px] py-3 px-8 sm:w-full my-6 font-bold hover:border-orange-500 duration-500"
          }
        >
          Войти через <span className="text-blue-600">VK</span> ID
        </button>
      </a>
    </>
  );
}
