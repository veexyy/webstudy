import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import { MdDone } from "react-icons/md";
import YouTube from "react-youtube";
import { getDatabase, onValue, ref, update } from "firebase/database";

interface AccordionItemProps {
  index: number;
  data: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ index, data }) => {
  const [done, setDone] = useState(false);

  const db = getDatabase();
  const getModules = () => {
    onValue(
      ref(
        db,
        `users/${localStorage.getItem(
          "localId"
        )}/courses/course_${localStorage.getItem("pickedCourse")}/modules`
      ),
      (snapshot) => {
        if (snapshot.exists()) {
          const modules = snapshot.val();
          if (modules[index - 1]?.isDone) {
            setDone(true);
          }
        }
      }
    );
  };
  useEffect(() => {
    getModules();
  }, [index]);

  const handler = () => {
    update(
      ref(
        db,
        `users/${localStorage.getItem(
          "localId"
        )}/courses/course_${localStorage.getItem("pickedCourse")}/modules`
      ),
      {
        [index - 1]: { id: index, isDone: true },
      }
    );
  };

  return (
    <Accordion
      sx={{
        bgcolor: "transparent",
        color: "white",
        border: "none",
      }}
    >
      <AccordionSummary
        sx={{
          borderBottom: "1px solid white",
          padding: "0",
        }}
        expandIcon={<IoIosArrowDown className={"fill-white"} />}
      >
        <ul>
          <li>
            <Typography sx={{ fontFamily: "Montserrat, sans-serif" }}>
              {index}. {data}
            </Typography>
          </li>
        </ul>
        <MdDone className={done ? "visible" : "hidden"} />
      </AccordionSummary>
      <AccordionDetails>
        <YouTube videoId="NErrGZ64OdE" onEnd={handler} />
      </AccordionDetails>
    </Accordion>
  );
};

export default function CourseAccordion() {
  const data = Array(10).fill("lorem ipsum");

  return (
    <>
      {data.map((item, index) => (
        <AccordionItem key={index} index={index + 1} data={item} />
      ))}
    </>
  );
}
