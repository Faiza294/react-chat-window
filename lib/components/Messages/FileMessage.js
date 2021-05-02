'use strict';

import FileIcon from "../../../es/components/icons/FileIcon";
import moment from 'moment';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FileIcon = require('./../icons/FileIcon');

var _FileIcon2 = _interopRequireDefault(_FileIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileMessage = function FileMessage(props) {
    var isImage = /\.(jpeg|jpg|gif|png|JPEG|JPG|GIF|PNG)$/.test(props.data.url);
    var isVideo = /\.(m4v|mpg|avi|mp4)$/.test(props.data.url);
    return _react2.default.createElement('div', { className: 'file-wrapper' },
        _react2.default.createElement(
            'a',
            { className: 'sc-message--file', href: props.data.url, target: "_blank" },
            isImage ? _react2.default.createElement('img', { src: props.data.url, alt: props.data.fileName, width: 200 }) :
                (isVideo ? _react2.default.createElement('video', { width: 200, controls: "controls" },
                    _react2.default.createElement('source', { src: props.data.url, type: "video/mp4" })
                    ) :
                    _react2.default.createElement(
                        'p',
                        { className: 'p-wrapper' },
                        _react2.default.createElement(_FileIcon2.default, null),
                        _react2.default.createElement(
                            'p',
                            { className: 'fileName' },
                            props.data.fileName
                        )
                    ))
        ),
        _react2.default.createElement( 'small', { className: 'sc-message--time' }, moment(props.data.time).calendar() )
    )
};

exports.default = FileMessage;
module.exports = exports['default'];