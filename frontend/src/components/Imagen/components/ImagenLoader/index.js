import React from 'react';
import ContentLoader from 'react-content-loader';

export default function ImagenLoader({ ...props }) {
  return (
    <ContentLoader 
      speed={2}
      width={1000}
      height={1000}
      viewBox="0 0 1200 1200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="0" ry="0" width="1000" height="1000" />
    </ContentLoader>
  );
}
