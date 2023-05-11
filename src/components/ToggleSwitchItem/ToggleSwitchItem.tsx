import React from 'react';
import { ToggleSwitchProps } from '../../interfaces/Props';

interface ToggleSwitchItemProps {
    switchItem: ToggleSwitchProps;
}

const ToggleSwitchItem: React.FC<ToggleSwitchItemProps> = ({ switchItem }) => {
    return (
        <label className="toggle-switch">
            <span className="label-text">{switchItem.toggleLabel}</span>
            <span className="slide-container">
                <input
                    type="checkbox"
                    checked={switchItem.checked}
                    disabled={switchItem.disabled}
                />
                <span className="slider"></span>
            </span>
        </label>
    );
};

export default ToggleSwitchItem;
