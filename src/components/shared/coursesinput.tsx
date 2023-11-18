import { SlMagnifier } from "react-icons/sl";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
export default function Coursesinput() {
  const [placeholder, setPlaceholder] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/courses") {
      setPlaceholder("Поиск по курсам");
    } else {
      setPlaceholder("Поиск по вебинарам");
    }
  });

  return (
    <>
      <div className="relative">
        <>
          <SlMagnifier className="absolute fill-white top-3 left-2 scale-[1, -1]" />
          <input
            type="text"
            name="search"
            className="bg-transparent border border-white rounded-xl font-montserrat py-2 pl-8 pr-32 text-white focus:outline-none"
            placeholder={placeholder}
          />
        </>
      </div>
    </>
  );
}
