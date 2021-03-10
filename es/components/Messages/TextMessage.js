import React, { Component } from 'react';
import Linkify from 'react-linkify';
import moment from "moment";
var TextMessage = function TextMessage(props) {
  return React.createElement(
    'div',
    { className: props.author === 'them' ? 'talk-bubble tri-right round left-in' : 'talk-bubble tri-right round right-in' },
    React.createElement(
      'p',
        { className: 'talk-text' },
      props.data.text
    ),
      React.createElement(
          'small',
          { className: 'sc-message--time' },
          moment(props.data.time).calendar()
      )
  );
};

export default TextMessage;