import WidgetTitle from "../../../components/shared/widgettitle";

export default function WeAreInMedia() {
  const data = [
    {
      link: "https://youtube.com/embed/KdZ4HF1SrFs",
      title: "Видео",
    },
    {
      link: "https://youtube.com/embed/KdZ4HF1SrFs",
      title: "Видео",
    },
  ];
  return (
    <div className="border border-white rounded-xl max-w-[1100px] mx-auto">
      <WidgetTitle>Мы в медиа</WidgetTitle>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 my-4 lg:my-[40px] px-3">
        {data.map((item, i) => (
          <iframe
            key={i}
            src={item.link}
            title={item.title}
            className="aspect-video w-[240px] sm:w-[480px] border border-white rounded-xl"
            allow="accelerometer"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
}
