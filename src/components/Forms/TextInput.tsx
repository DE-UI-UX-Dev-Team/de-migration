import React, { useState } from 'react';
import { TextInputProps } from '../../interfaces/Props';

const TextInput: React.FC<TextInputProps> = ({
    id,
    label,
    name,
    required,
    disabled,
    placeholder,
    pattern,
    errorMessage,
    showIcon = false,
    showResetButton = false,
    classNameDiv,
    className,
    onChange,
    value,
}) => {
    const [error, setError] = useState<string | undefined>(undefined);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;

        if (required && inputValue.trim() === '') {
            setError(errorMessage || 'Please fill out this field!!');
        } else if (pattern && !new RegExp(pattern).test(inputValue)) {
            setError(errorMessage || 'Invalid input');
        } else {
            setError(undefined);
        }

        if (onChange) {
            onChange(e);
        }
    };

    return (
        <div
            className={classNameDiv}
            id={id}
        >
            <label
                className={className}
                htmlFor={name}
            >
                <input
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    pattern={pattern}
                    required={required}
                    disabled={disabled}
                    onChange={handleInputChange}
                    value={value}
                />
                {showIcon && <i className="fak fa-location-dot-solid"></i>}
                {error && <div className="validation-message">{error}</div>}
                <span>{label}</span>
                {showResetButton && (
                    <button className="btn--tertiary">
                        <i className="fak fa-circle-xmark-solid"></i>
                    </button>
                )}
            </label>
        </div>
    );
};

export default TextInput;
