import React from 'react';

export interface HiddenInputProps {
    inputId: string;
    inputName: string;
    inputAttribute: string;
    inputType: string;
    inputChecked: boolean;
}

export const HiddenInput: React.FC<HiddenInputProps> = ({
    inputId,
    inputName,
    inputAttribute,
    inputType,
    inputChecked,
}) => {
    return (
        <input
            id={inputId}
            name={inputName}
            data-content-switcher={inputAttribute}
            type={inputType}
            checked={inputChecked}
        />
    );
};

export default HiddenInput;
