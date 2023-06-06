import React from 'react';

const IframeControl = ({ iframeId, iframeSrc }) => {
    const iframeBackgroundColor = '#fff';

    const handleButtonClick = (size) => {
        const buttons = document.querySelectorAll('.iframe-control button');
        buttons.forEach((button) => button.classList.remove('active'));
        const iframe = document.getElementById(iframeId);
        iframe.className = size;
        iframe.style.backgroundColor = iframeBackgroundColor;
        document.querySelector(`.iframe-button-${size}`).classList.add('active');
    };

    const handleIframeLoad = (iframe) => {
        try {
            resizeIframeHeight(iframe);
        } catch (e) {}
    };

    const handleIframeResize = (iframe) => {
        try {
            resizeIframeHeight(iframe);
        } catch (e) {}
    };

    return (
        <div className="iframe-control">
            <button
                className="iframe-button-full-width btn--tertiary"
                data-iframe={iframeId}
                data-size="full-width"
                onClick={() => handleButtonClick('full-width')}
                aria-label="Full width container"
            >
                <i className="icon-md fa-regular fa-expand-wide"></i>
            </button>
            <button
                className="iframe-button-xl active btn--tertiary"
                data-iframe={iframeId}
                data-size="xl"
                onClick={() => handleButtonClick('xl')}
                aria-label="Extra-large container"
            >
                <i className="icon-md fa-regular fa-desktop"></i>
            </button>
            <button
                className="iframe-button-lg btn--tertiary"
                data-iframe={iframeId}
                data-size="lg"
                onClick={() => handleButtonClick('lg')}
                aria-label="Large container"
            >
                <i className="icon-md fa-regular fa-laptop"></i>
                {/* <img src="/_docs/images/doc-specific/iframe-large-icon.svg" alt="Large Icon" /> */}
            </button>
            <button
                className="iframe-button-md btn--tertiary"
                data-iframe={iframeId}
                data-size="md"
                onClick={() => handleButtonClick('md')}
                aria-label=" container"
            >
                <i className="icon-md fa-regular fa-tablet"></i>
                {/* <img src="/_docs/images/doc-specific/iframe-medium-icon.svg" alt="Medium Icon" /> */}
            </button>
            <button
                className="iframe-button-sm btn--tertiary"
                data-iframe={iframeId}
                data-size="sm"
                onClick={() => handleButtonClick('sm')}
            >
                <i className="icon-md fa-regular fa-mobile-screen"></i>
                {/* <img src="/_docs/images/doc-specific/iframe-small-icon.svg" alt="Small Icon" /> */}
            </button>

            <div className="iframe-container">
                <iframe
                    id={iframeId}
                    className="xl"
                    allowtransparency="true"
                    style={{ backgroundColor: iframeBackgroundColor }}
                    src={iframeSrc}
                    onLoad={() => handleIframeLoad(document.getElementById(iframeId))}
                    onResize={() => handleIframeResize(document.getElementById(iframeId))}
                ></iframe>
            </div>
        </div>
    );
};

export default IframeControl;
