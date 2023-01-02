import ContentLoader from "react-content-loader";

const HomeSkeleton = ({ ...rest }) => (
  <ContentLoader
    height="100%"
    width="1400"
    viewBox="0 0 350 150"
    backgroundColor="#1f1f1f"
    foregroundColor="#1b1b1b"
    {...rest}
  >
    <rect x="0" y="0" rx="4" ry="4" width="350" height="150" />
  </ContentLoader>
);

HomeSkeleton.metadata = {
  name: "Didier Munezero",
  github: "didiermunezero",
  description: "Grid for content of head and body",
  filename: "HeadBodyGrid",
};

export default HomeSkeleton;
