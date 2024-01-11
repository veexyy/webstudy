import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

export default function WhatYouWillCan() {
  return (
    <div className="flex w-full flex-col  sm:flex-row lg:justify-between bg-black py-10 px-4 border border-white rounded-xl lg:max-w-[1100px] max-w-[1024px] gap-3 md:gap-10 items-center">
      <Title />
      <Subtitle></Subtitle>
    </div>
  );
}
