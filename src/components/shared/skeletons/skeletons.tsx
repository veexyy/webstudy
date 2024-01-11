import ContentLoader from "react-content-loader";

const CourseSkeleton = (props: any) => (
  <ContentLoader
    speed={1}
    width={250}
    height={100}
    viewBox="0 0 250 100"
    backgroundColor="#939393"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="12" ry="12" width="250" height="100" />
  </ContentLoader>
);
const FilterSkeleton = (props: any) => (
  <ContentLoader
    speed={1}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#939393"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="10" cy="20" r="8" />
    <rect x="33" y="17" rx="5" ry="5" width="165" height="8" />
    <circle cx="10" cy="50" r="8" />
    <rect x="33" y="45" rx="5" ry="5" width="165" height="8" />
    <circle cx="10" cy="80" r="8" />
    <rect x="33" y="75" rx="5" ry="5" width="165" height="8" />
    <circle cx="11" cy="110" r="8" />
    <rect x="33" y="107" rx="5" ry="5" width="165" height="8" />
  </ContentLoader>
);

const AboutSkeleton = (props: any) => (
  <ContentLoader
    speed={1}
    width={400}
    height={600}
    viewBox="0 0 400 600"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="400" height="600" />
  </ContentLoader>
);

const ReviewsSkeleton = (props: any) => (
  <ContentLoader
    speed={1}
    width={1100}
    height={242}
    viewBox="0 0 1100 242"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="14" rx="24" ry="24" width="200" height="200" />
    <rect x="233" y="14" rx="16" ry="16" width="822" height="36" />
    <rect x="233" y="82" rx="16" ry="16" width="822" height="130" />
  </ContentLoader>
);
export { CourseSkeleton, FilterSkeleton, AboutSkeleton, ReviewsSkeleton };
