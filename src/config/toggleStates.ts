import { ToggleSwitchProps } from '../interfaces/Props';

const toggleStates: ToggleSwitchProps[] = [
    {
        id: 1,
        disabled: false,
        checked: true,
        toggleLabel: 'Switch On',
    },
    {
        id: 2,
        disabled: false,
        checked: false,
        toggleLabel: 'Switch Off',
    },
    {
        id: 3,
        disabled: true,
        checked: true,
        toggleLabel: 'Switch On - Disabled',
    },
    {
        id: 4,
        disabled: true,
        checked: false,
        toggleLabel: 'Switch Off - Disabled',
    },
];

export default toggleStates;
