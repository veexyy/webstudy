import { ContactInformation } from "../../widgets/contact-information/ContactInformation";
import { OurAchievments } from "../../widgets/our-achievments/OurAchievments";
import { AboutSkeleton } from "../../components/shared/skeletons/skeletons";
import { Helmet } from "react-helmet";
export default function About() {
  return (
    <div className="text-white">
      <Helmet>
        <title>WebStudy | О нас</title>
      </Helmet>
      <section>
        <h1 className="text-3xl md:text-5xl font-bold font-montserrat text-white mt-10 md:mt-20 mb-12 md:mb-24">
          О нас
        </h1>
        <p className="text-xl md:text-4xl font-montserrat font-bold">
          Мы - платформа курсов с миссией: дать возможность каждому стать
          актуальным специалистом. Вне зависимости от возраста и географии, вы
          можете обрести востребованные навыки. Присоединяйтесь к нам и
          расширьте свои знания для успешной карьеры.
        </p>
      </section>
      <section className="font-montserrat text-white mt-12 md:mt-20 mb-12 md:mb-24">
        <h1 className="text-3xl md:text-5xl font-bold mt-10 md:mt-20 mb-12 md:mb-24">
          Основатели платформы
        </h1>
        <div className="flex items-center flex-col gap-3">
          <AboutSkeleton />

          <h1 className="text-xl md:text-3xl font-bold">Илья Бондарь</h1>
          <p className="text-sm">основатель и директор</p>
        </div>
      </section>
      <section className="my-20 md:my-48">
        <OurAchievments />
      </section>
      <section className="my-20 md:my-48">
        <ContactInformation />
      </section>
    </div>
  );
}
