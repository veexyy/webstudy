import { SlArrowDown } from "react-icons/sl";
import { ContactInformation } from "../../widgets/contact-information/ContactInformation";
import Professions from "./components/Professions";
import Ratings from "../../widgets/ratings/Ratings";
import WeAreInMedia from "./components/WeAreInMedia";

export default function MainPage() {
  function scrollToAnimated(targetPosition: number, duration: number): void {
    const startPosition: number = window.scrollY;
    const distance: number = targetPosition - startPosition;
    let startTime: number | null = null;

    function scrollAnimation(currentTime: number): void {
      if (startTime === null) {
        startTime = currentTime;
      }
      const elapsedTime: number = currentTime - startTime;
      const scrollProgress: number = Math.min(elapsedTime / duration, 1);
      const scrollValue: number = startPosition + distance * scrollProgress;
      window.scrollTo(0, scrollValue);
      if (scrollProgress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    }
    requestAnimationFrame(scrollAnimation);
  }
  return (
    <>
      <div className="text-white flex flex-col items-center justify-center min-h-screen gap-16">
        <div className="text-center flex flex-col gap-2">
          <h1 className="font-akony text-xl md:text-4xl">Webstudy</h1>
          <h2
            style={{
              WebkitTextStroke: "1px black",
              textShadow: "2px 2px 2px white",
            }}
            className="font-akony text-xs md:text-xl text-[#9BFF37]  shadow-white"
          >
            Открой мир IT с нами
          </h2>
        </div>
        <p className="flex flex-col text-center font-montserrat text-xs md:text-xl gap-0.5 font-bold">
          <span>Практика на реальных проектах</span>
          <span>Помощь с трудоустройством</span>
          <span>Наши выпускники устраиваются в 91% случаев</span>
        </p>
        <SlArrowDown
          onClick={() => scrollToAnimated(1000, 100)}
          className="animate-bounce w-8 md:w-12 h-8 md:h-12 mt-4 cursor-pointer"
        />
      </div>
      <div>
        <Professions />
      </div>
      <div className="my-24">
        <Ratings />
      </div>
      <div className="my-24">
        <WeAreInMedia />
      </div>
      <div className="max-w-[1100px] mx-auto shadow shadow-[#FFD600] rounded-md mb-10">
        <ContactInformation />
      </div>
    </>
  );
}
