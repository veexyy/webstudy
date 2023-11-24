import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

export default function WhatYouWillCan() {
  return (
    <div className="flex flex-col md:flex-row lg:justify-between border border-white rounded-xl max-w-[1900px] gap-3 md:gap-10 items-center">
      <Title />
      <Subtitle></Subtitle>
    </div>
  );
}
