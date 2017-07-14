import React from 'react';
import PropTypes from 'prop-types';

const InputText = ({ initialValue, lengthCheck }) => (
  <input
    type="text"
    value={initialValue}
    onChange={event => lengthCheck(event.target.value)}
  />
);

InputText.propTypes = {
  initialValue: PropTypes.string,
  lengthCheck: PropTypes.func,
};

export default InputText;
