import React from 'react';
import { ContentSwitcherProps } from '../../interfaces/Props';

export interface hiddenInputItemProps {
    hiddenInputItem: ContentSwitcherProps['contentSwitcherObject']['hiddenInput'];
}

export const HiddenInput: React.FC<hiddenInputItemProps> = ({ hiddenInputItem }) => {
    return (
        <input
            id={hiddenInputItem.inputId}
            name={hiddenInputItem.inputName}
            data-content-switcher={hiddenInputItem.inputAttribute}
            type={hiddenInputItem.inputType}
            checked={hiddenInputItem.inputChecked}
        />
    );
};

export default HiddenInput;
