import React from "react"
import ContentLoader from "react-content-loader"

const Skelton = () => {
  return (
    <>
      <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="absolute -top-5 left-0 w-full h-full"
      >
        <rect x="528" y="526" rx="2" ry="2" width="140" height="10" />
        <rect x="-8" y="5" rx="2" ry="2" width="508" height="508" />
      </ContentLoader>
      <ContentLoader
        speed={2}
        width={400}
        height={460}
        viewBox="0 0 400 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        className="absolute -top-12 left-0 w-full h-full"
      >
        <rect x="528" y="526" rx="2" ry="2" width="140" height="10" />
        <rect x="-8" y="5" rx="2" ry="2" width="508" height="508" />
      </ContentLoader>
    </>
  );
};

export default Skelton;
