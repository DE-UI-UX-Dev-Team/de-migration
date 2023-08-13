import React, { useState } from 'react';
import { AlertProps } from '../../interfaces/Props';
import { header } from '../../local/en/alert/constants';

const Alert: React.FC<AlertProps> = ({ alertType, desc, ctaText, closeButton }) => {
    const [isActive, setIsActive] = useState(true);

    const handleCloseButton = () => {
        setIsActive(false);
    };

    const handleClick = () => {
        window.location.href = '#';
    };

    return (
        <div className="banner-alerts">
            <div className={`alert-container bg--${alertType}-background`}>
                <div
                    data-alert-message
                    data-message-type={alertType}
                    data-status={isActive ? 'active' : ''}
                >
                    <div className="row">
                        <div className="alert-msg col--lg-9">
                            <h4 className="alert-head">
                                {header.left} {alertType} {header.right}
                            </h4>
                            <span className="p-2">{desc}</span>
                        </div>
                        {ctaText && (
                            <div className="alert-cta col--lg-3">
                                <button
                                    className="btn"
                                    onClick={handleClick}
                                >
                                    {ctaText}
                                </button>
                            </div>
                        )}
                    </div>
                    {closeButton && (
                        <button
                            className="btn--tertiary close-button"
                            onClick={handleCloseButton}
                        >
                            {closeButton}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Alert;
