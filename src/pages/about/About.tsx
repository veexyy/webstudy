import { ContactInformation } from "../../widgets/contact-information/ContactInformation";
import { OurAchievments } from "../../widgets/our-achievments/OurAchievments";

export default function About() {
  return (
    <div className="text-white relative z-[1] max-w-[1536px] px-3 lg:px-6 desktop:px-[30px] mx-auto">
      <section>
        <h1 className="text-3xl md:text-5xl font-bold font-montserrat text-white mt-10 md:mt-20 mb-12 md:mb-24">
          О нас
        </h1>
        <p className="text-xl md:text-4xl font-montserrat font-bold">
          Наша миссия — дать возможность каждому быть актуальным и
          востребованным специалистом прямо сейчас. Вне зависимости от возраста
          и географии.
        </p>
      </section>
      <section className="font-montserrat text-white mt-12 md:mt-20 mb-12 md:mb-24">
        <h1 className="text-3xl md:text-5xl font-bold mt-10 md:mt-20 mb-12 md:mb-24">
          Основатели платформы
        </h1>
        <div className="flex items-center flex-col gap-3">
          <iframe
            className="border-none px-3 sm:w-[640px] h-[360px]"
            src="https://drive.google.com/file/d/1XN67sPXIs8YVAfhuNEtxt8AKZhKQLqnc/preview"
            allow="autoplay"
          ></iframe>
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
