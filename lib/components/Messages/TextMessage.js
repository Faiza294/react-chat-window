'use strict';

import moment from "moment";

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLinkify = require('react-linkify');

var _reactLinkify2 = _interopRequireDefault(_reactLinkify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextMessage = function TextMessage(props) {
  return _react2.default.createElement(
    'div',
    { className: props.author === 'them' ? 'talk-bubble tri-right round left-in' : 'talk-bubble tri-right round right-in' },
    _react2.default.createElement(
      'p',
        { className: 'talk-text' },
      props.data.text
    ), _react2.default.createElement(
          'small',
          { className: 'sc-message--time' },
          moment(props.data.time).calendar()
      )
  );
};

exports.default = TextMessage;
module.exports = exports['default'];