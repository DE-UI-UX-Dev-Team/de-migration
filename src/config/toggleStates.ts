import { ToggleSwitchProps } from '../interfaces/Props';
import { toggleLabel } from '../local/en/toggle/constants';

const toggleStates: ToggleSwitchProps[] = [
    {
        disabled: false,
        checked: true,
        toggleLabel: `${toggleLabel.switchOn}`,
    },
    {
        disabled: false,
        checked: false,
        toggleLabel: `${toggleLabel.switchOff}`,
    },
    {
        disabled: true,
        checked: true,
        toggleLabel: `${toggleLabel.switchOnDisabled}`,
    },
    {
        disabled: true,
        checked: false,
        toggleLabel: `${toggleLabel.switchOffDisabled}`,
    },
];

export default toggleStates;
