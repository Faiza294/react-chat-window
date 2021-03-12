import React, { Component } from 'react';
import FileIcon from './../icons/FileIcon';

var FileMessage = function FileMessage(props) {
    var isImage = /\.(jpeg|jpg|gif|png|JPEG|JPG|GIF|PNG)$/.test(props.data.url);
    var isVideo = /\.(m4v|mpg|avi|mp4)$/.test(props.data.url);
    return React.createElement('div', { className: 'file-wrapper' },
        React.createElement(
            'a',
            { className: 'sc-message--file', href: props.data.url, target: "_blank" },
            isImage ? React.createElement('img', { src: props.data.url, alt: props.data.fileName, width: 200 }) :
                (isVideo ? React.createElement('video', { width: 200, controls: "controls" },
                    React.createElement('source', { src: props.data.url, type: "video/mp4" })
                    ) :
                    React.createElement(
                        'p',
                        { className: 'p-wrapper' },
                        React.createElement(FileIcon, null),
                        React.createElement(
                            'p',
                            { className: 'fileName' },
                            props.data.fileName
                        )
                    ))
        ),
        React.createElement( 'small', { className: 'sc-message--time' }, moment(props.data.time).calendar() )
    )

};

export default FileMessage;