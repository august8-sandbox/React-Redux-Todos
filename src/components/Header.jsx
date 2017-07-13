import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ placeholder, initialValue }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={initialValue}
  />
);

Header.propTypes = {
  placeholder: PropTypes.string,
  initialValue: PropTypes.string,
};
