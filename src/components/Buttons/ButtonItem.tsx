import React from 'react';
import { ButtonProps } from '../../interfaces/Props';

const ButtonItem: React.FC<ButtonProps> = ({ buttonType, buttonLabel, buttonIconLeft, buttonIconRight }) => {
    const buttonClass = buttonIconRight ? `${buttonType} icon-right` : buttonType;
    return (
        <button className={buttonClass}>
            {buttonIconLeft ? <i className={buttonIconLeft}></i> : ''}
            {buttonIconRight ? <i className={buttonIconRight}></i> : ''}
            {buttonLabel}
        </button>
    );
};

export default ButtonItem;
