import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { ContactInformation } from "../../widgets/contact-information/ContactInformation";
import { OurAchievments } from "../../widgets/our-achievments/OurAchievments";
import { useState } from "react";
import { AboutSkeleton } from "../../components/shared/skeletons/skeletons";

export default function About() {
  const [url, setUrl] = useState("");
  const storage = getStorage();
  const storageRef = ref(storage, "photos/photo_2024-01-04_13-20-09.jpg");
  getDownloadURL(storageRef).then((url) => {
    setUrl(url);
  });
  return (
    <div className="text-white">
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
          {url ? (
            <img className="w-[200px] md:w-[400px]" src={url} alt="Director" />
          ) : (
            <AboutSkeleton />
          )}

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
