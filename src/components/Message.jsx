import React, { PropTypes } from 'react';

const Message = ({ length }) => (
  <div>
    {length}
  </div>
);

Message.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Message;
