import WidgetTitle from "../../components/shared/widgettitle";
import OurAchievmentsBlock from "./components/achievment-block";
import { ourAchievments } from "../../components/shared/consts";

export function OurAchievments() {
  return (
    <div className="border-white border rounded-md  bg-transparent max-w-[1100px]  mx-auto">
      <WidgetTitle> Наши достижения </WidgetTitle>
      <div className="flex sm:gap-10 gap-5 px-4 md:px-0 justify-center sm:my-[100px] my-7">
        {ourAchievments.map((achievment, i) => (
          <OurAchievmentsBlock key={i}>{achievment}</OurAchievmentsBlock>
        ))}
      </div>
    </div>
  );
}
