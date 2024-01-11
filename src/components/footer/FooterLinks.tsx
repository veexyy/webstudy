import { Column } from "./Column";
import { Link as LinkType } from "../shared/types";
export type ColumnDataType = {
  title: string;
  links: LinkType[];
  category?: string;
};
export function FooterLinks() {
  const footerLinks: ColumnDataType[] = [
    {
      title: "Направления",
      links: [
        { name: "Разработка", link: "/courses", category: "dev" },
        { name: "Дизайн", link: "/courses", category: "design" },
        { name: "Нейросети", link: "/courses", category: "ai" },
        { name: "Тестирование", link: "/courses", category: "test" },
      ],
    },
    {
      title: "О компании",
      links: [{ name: "О нас", link: "/about" }],
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
      {footerLinks.map(({ title, links, category }, i) => (
        <Column key={i} title={title} links={links} category={category} />
      ))}
    </>
  );
}
