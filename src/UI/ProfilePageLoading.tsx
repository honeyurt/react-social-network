import React from 'react';
import ContentLoader from 'react-content-loader';

const ProfilePageLoading: React.FC = (props) => (
  <ContentLoader
    speed={2}
    width={905}
    height={255}
    viewBox="0 0 905 255"
    backgroundColor="#3498db"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="101" y="109" rx="0" ry="0" width="5" height="3" />
    <rect x="11" y="2" rx="5" ry="5" width="250" height="250" />
    <rect x="405" y="19" rx="4" ry="4" width="109" height="16" />
    <rect x="378" y="108" rx="4" ry="4" width="157" height="16" />
    <rect x="424" y="43" rx="4" ry="4" width="72" height="16" />
    <rect x="378" y="141" rx="4" ry="4" width="31" height="27" />
    <rect x="420" y="141" rx="4" ry="4" width="31" height="27" />
    <rect x="462" y="141" rx="4" ry="4" width="31" height="27" />
    <rect x="504" y="141" rx="4" ry="4" width="31" height="27" />
    <rect x="377" y="82" rx="4" ry="4" width="157" height="16" />
  </ContentLoader>
);

export default ProfilePageLoading;
