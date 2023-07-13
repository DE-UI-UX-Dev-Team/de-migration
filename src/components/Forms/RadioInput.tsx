import React from 'react';
import { RadioInputProps, RadioInputGroupProps } from '../../interfaces/Props';

const RadioInput: React.FC<RadioInputProps> = ({ id, name, value, label, onChange }) => {
    return (
        <li>
            <label
                className="wrap--radio-input"
                htmlFor={id}
            >
                <input
                    id={id}
                    type="radio"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
                <span>{label}</span>
            </label>
        </li>
    );
};

const RadioInputGroup: React.FC<RadioInputGroupProps> = ({ className, radioData, reset, onChange }) => {
    return (
        <ul className={className}>
            {radioData.map((data) => (
                <RadioInput
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    value={data.value}
                    label={data.label}
                    reset={reset}
                    onChange={onChange}
                />
            ))}
        </ul>
    );
};

export default RadioInputGroup;
