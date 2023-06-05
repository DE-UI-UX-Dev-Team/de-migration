import React from 'react';
import { InputButtonProps } from '../../interfaces/Props';

const InputButtonItem: React.FC<InputButtonProps> = ({
    inputButtonType,
    inputButtonValue,
    inputButtonIconLeft,
    inputButtonIconRight,
}) => {
    return (
        <label>
            {inputButtonIconLeft ? <i className={inputButtonIconLeft}></i> : ''}
            <input
                type={inputButtonType}
                value={inputButtonValue}
                className="center-block"
            />
            {inputButtonIconRight ? <i className={inputButtonIconRight}></i> : ''}
        </label>
    );
};

export default InputButtonItem;
