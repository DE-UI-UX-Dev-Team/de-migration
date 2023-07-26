import React, { useEffect, useState } from 'react';
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
    reset,
}) => {
    const [inputValue, setInputValue] = useState<string | ''>('');
    const [message, setMessage] = useState<string | undefined>(undefined);
    const [error, setError] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);

        if (required && inputValue.trim() === '') {
            setError(true);
            setMessage('Missing input');
            setSuccess(false);
        } else if (pattern && !new RegExp(pattern).test(inputValue)) {
            setError(true);
            setMessage(errorMessage || 'Invalid input');
            setSuccess(false);
        } else {
            setError(false);
            setMessage(undefined);
            setSuccess(true);
        }

        if (onChange) {
            onChange(e);
        }
    };

    const resetInput = () => {
        setInputValue('');
        setMessage(undefined);
        setSuccess(false);
        setError(false);
    };

    useEffect(() => {
        if (reset) {
            resetInput();
        }
    }, [reset]);

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
                    value={inputValue}
                    className={error ? 'input-error' : success ? 'input-success' : ''}
                />
                {showIcon && <i className="fak fa-location-dot-solid"></i>}
                {error && <div className="validation-message ">{message}</div>}
                {success && <div className="clr--success-element">Entry Successful</div>}
                <span>{label}</span>
                {showResetButton && (
                    <button
                        className="btn--tertiary"
                        onClick={resetInput}
                    >
                        <i className="fak fa-circle-xmark-solid"></i>
                    </button>
                )}
            </label>
        </div>
    );
};

export default TextInput;
