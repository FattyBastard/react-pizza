import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="card"
    {...props}>
    <rect x="10" y="280" rx="0" ry="0" width="260" height="24" />
    <rect x="0" y="315" rx="0" ry="0" width="280" height="85" />
    <rect x="41" y="467" rx="0" ry="0" width="64" height="39" />
    <rect x="0" y="420" rx="0" ry="0" width="90" height="30" />
    <rect x="10" y="0" rx="125" ry="125" width="260" height="260" />
    <rect x="121" y="411" rx="0" ry="0" width="155" height="40" />
  </ContentLoader>
);

export default MyLoader;
