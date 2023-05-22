import React from 'react';
import { ToggleSwitchProps } from '../../interfaces/Props';
import ToggleSwitchItem from '../ToggleSwitchItem/ToggleSwitchItem';

interface ToggleSwitchComponentProps {
    switches: ToggleSwitchProps[];
}

export const ToggleSwitchComponent: React.FC<ToggleSwitchComponentProps> = ({ switches }) => {
    return (
        <div>
            {switches.map((switchItem) => (
                <li>
                    <ToggleSwitchItem
                        disabled={switchItem.disabled}
                        checked={switchItem.checked}
                        toggleLabel={switchItem.toggleLabel}
                    />
                </li>
            ))}
        </div>
    );
};

export default ToggleSwitchComponent;
