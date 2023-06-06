import { ToggleSwitchProps } from '../interfaces/Props';

const toggleStates: ToggleSwitchProps[] = [
    {
        disabled: false,
        checked: true,
        toggleLabel: 'Switch On',
    },
    {
        disabled: false,
        checked: false,
        toggleLabel: 'Switch Off',
    },
    {
        disabled: true,
        checked: true,
        toggleLabel: 'Switch On - Disabled',
    },
    {
        disabled: true,
        checked: false,
        toggleLabel: 'Switch Off - Disabled',
    },
];

export default toggleStates;
