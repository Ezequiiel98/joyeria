import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

export default function Head({ title, children }) {
  return (
    <Helmet>
      <title>{title ? title : null} | Joyería Gold</title>
      {children}
    </Helmet>
  );
}

Head.propTypes = {
  title: PropTypes.string
};
