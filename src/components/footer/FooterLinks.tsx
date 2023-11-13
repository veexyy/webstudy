import { Column } from "./Column";
import { Link as LinkType } from "../shared/types";
export type ColumnDataType = {
  title: string;
  links: LinkType[];
};
export function FooterLinks() {
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
        { name: "YouTube", link: "https://www.youtube.com/" },
      ],
    },
  ];
  return (
    <>
      {footerLinks.map(({ title, links }, i) => (
        <Column key={i} title={title} links={links} />
      ))}
    </>
  );
}
