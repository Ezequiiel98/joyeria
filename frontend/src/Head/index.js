import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export default function Head({ title = 'title', children }) {
  return (
    <Helmet>
      <title>{title} | Coloma</title>
      {children}
    </Helmet>
  );
}

Head.propTypes = {
  title: PropTypes.string
};
