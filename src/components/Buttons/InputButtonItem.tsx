import React from 'react';
import { InputButtonProps } from '../../interfaces/Props';

const InputButtonItem: React.FC<InputButtonProps> = ({
    inputButtonType,
    inputButtonValue,
    inputButtonIconLeft,
    inputButtonIconRight,
}) => {
    return (
        <label
            type={inputButtonType}
            className={inputButtonIconRight ? 'icon-right' : ''}
        >
            {inputButtonIconLeft ? <i className={inputButtonIconLeft}></i> : ''}
            {inputButtonIconRight ? <i className={inputButtonIconRight}></i> : ''}
            <input
                type={inputButtonType}
                value={inputButtonValue}
                className="center-block"
            />
        </label>
    );
};

export default InputButtonItem;
