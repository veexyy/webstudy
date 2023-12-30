import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdDone } from "react-icons/md";
import YouTube from "react-youtube";
import { useAppSelector } from "../../../components/shared/store/hooks/redux-hooks";

export default function AccordionItems({ item }: any) {
  const [isActive, setIsActive] = useState(false);
  const [done, setDone] = useState(false);
  const modules = useAppSelector(
    (state) => state.pickedCourse.pickedCourseModules
  );
  console.log(modules);

  return (
    <React.Fragment key={item}>
      <div
        className="flex justify-between items-center cursor-pointer -my-3 py-3 duration-500"
        onClick={() => setIsActive(!isActive)}
      >
        <li className="list-decimal">{item}</li>
        <div className="flex items-center gap-3">
          <MdDone className={done ? "visible" : "hidden"} />
          {isActive ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <div
        onClick={() => (isActive ? setIsActive(true) : null)}
        className={isActive ? "visible" : "hidden"}
      >
        <YouTube videoId="NErrGZ64OdE" onEnd={() => setDone(true)} />
      </div>
      <hr />
    </React.Fragment>
  );
}
