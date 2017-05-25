import React, { DOM } from 'react';

import Image from '../ui/Image';
import TextBox from '../ui/TextBox';

const BlogItem = (props) => (
  DOM.div(
    {},
    React.createElement(Image, {src: props.src, width: 100, width: 100, alt: "foo"}),
    React.createElement(TextBox, {}, props.text)
  )
);

export default BlogItem;
