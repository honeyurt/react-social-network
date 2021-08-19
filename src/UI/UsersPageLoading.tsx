import React from 'react';
import ContentLoader from 'react-content-loader';

const UsersPageLoading: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={200}
    height={130}
    viewBox="0 0 200 130"
    backgroundColor="#3498db"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="58" cy="49" r="46" />
    <rect x="9" y="108" rx="4" ry="4" width="103" height="22" />
    <rect x="130" y="15" rx="4" ry="4" width="68" height="10" />
    <rect x="131" y="38" rx="4" ry="4" width="68" height="10" />
  </ContentLoader>
);

export default UsersPageLoading;
