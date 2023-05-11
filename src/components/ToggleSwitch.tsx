import React from 'react';

export interface ToggleSwitchProps {
    disabled: boolean;
    checked: boolean;
    toggleLabel: string;
}

export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ disabled, checked, toggleLabel }) => {
    return (
        <label className="toggle-switch">
            <span className="label-text">{toggleLabel}</span>
            <span className="slide-container">
                <input
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                />
                <span className="slider"></span>
            </span>
        </label>
    );
};

export default ToggleSwitch;
