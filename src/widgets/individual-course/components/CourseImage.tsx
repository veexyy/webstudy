type ImageType = {
  className?: string;
  src: string;
};
export default function CourseImage({ src, className }: ImageType) {
  return (
    <>
      <img src={src} className={className} alt="" />
    </>
  );
}
