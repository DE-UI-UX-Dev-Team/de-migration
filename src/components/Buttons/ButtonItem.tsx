import React from 'react';
import { ButtonProps } from '../../interfaces/Props';

const ButtonItem: React.FC<ButtonProps> = ({ buttonType, buttonLabel, buttonIconLeft, buttonIconRight }) => {
    return (
        <button className={buttonType}>
            {buttonIconLeft ? <i className={buttonIconLeft}></i> : ''}
            {buttonLabel}
            {buttonIconRight ? <i className={buttonIconRight}></i> : ''}
        </button>
    );
};

export default ButtonItem;
