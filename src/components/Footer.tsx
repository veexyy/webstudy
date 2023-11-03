import { Link as LinkType } from "./shared/types";
import { Logo } from "./shared/Logo";
import { Column } from "./Column";
export type ColumnDataType = {
  title: string;
  links: LinkType[];
};
export function Footer() {
  const footerLinks: ColumnDataType[] = [
    {
      title: "Направления",
      links: [
        { name: "Веб-разработка", link: "/webdev" },
        { name: "Дизайн", link: "/design" },
        { name: "Нейросети", link: "/neuro" },
        { name: "Тестирование", link: "/testing" },
      ],
    },
    {
      title: "О компании",
      links: [
        { name: "О нас", link: "/about" },
        { name: "Отзывы", link: "/reviews" },
      ],
    },
    {
      title: "Контакты",
      links: [
        { name: "Telegram", link: "https://web.telegram.org/k/#@fuidhf" },
        { name: "YouTube", link: "@asdfasdfasdfhah" },
      ],
    },
  ];
  return (
    <footer>
      <div className="flex flex-col lg:flex-row bg-transparent justify-between px-3 items-center lg:px-6 desktop:px-[50px] h-fit max-w-[1548px] mx-auto">
        <div className="lg:w-1/5">
          <Logo />
        </div>
        <ul className="text-white flex flex-col lg:flex-row gap-5 items-center md:items-start lg:gap-[126px] justify-center md:justify-start lg:justify-end lg:w-4/5 md:grid grid-cols-2 md:gap-x-20 lg:flex">
          {footerLinks.map(({ title, links }, i) => (
            <Column key={i} links={links} title={title} />
          ))}
        </ul>
      </div>
    </footer>
  );
}
