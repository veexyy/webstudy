import { Link } from "react-router-dom";
type Dispatch = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export function MobileMenu({ open, setOpen }: Dispatch) {
  const headerLinks = [
    { name: "О нас", link: "/about" },
    { name: "Вебинары", link: "/webinars" },
    { name: "Войти", link: "/login" },
  ];
  return (
    <>
      {" "}
      <div
        className="absolute z-10 text-white right-4 top-0 justify-self-end text-5xl cursor-pointer overflow-hidden"
        onClick={() => setOpen(!open)}
        id="cross"
      >
        &times;
      </div>
      <div className="lg:invisible visible duration-1000 absolute bg-black h-full w-full top-0 left-0 text-white text-center flex justify-center font-bold items-center font-montserrat gap-[10px]">
        <ul className="flex flex-col gap-[10px]">
          {headerLinks.map(({ link, name }, i) => (
            <li key={i}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
