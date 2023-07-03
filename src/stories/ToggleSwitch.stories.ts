import ToggleSwitchItem from '../components/ToggleSwitchItem/ToggleSwitchItem';
import toggleStates from '../config/toggleStates';

export default {
    title: 'DE/ToggleSwitch',
    component: ToggleSwitchItem,
    tags: ['autodocs'],
};

export const defaultToggleSwitch = {
    args: {
        checked: toggleStates[0].checked,
        disabled: toggleStates[0].disabled,
        toggleLabel: 'Toggle Switch',
    },
};
