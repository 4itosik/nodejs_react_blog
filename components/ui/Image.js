import React, { DOM } from 'react';

const Image = ({src, width, height, alt}) => (
  React.createElement(
    'img',
    { src: src, width: width, height: height, alt: alt }
  )
);

export default Image;
