import HiddenInput from '../components/ContentSwitcher/HiddenInput';
import { ContentSwitcherProps } from '../interfaces/Props';

export const hiddenInputData: ContentSwitcherProps['contentSwitcherObject']['hiddenInput'][] = [
    {
        inputId: 'switch-right-1',
        inputName: 'switch-1',
        inputAttribute: 'input-right',
        inputType: 'radio',
        inputChecked: true,
    },
    {
        inputId: 'switch-left-1',
        inputName: 'switch-1',
        inputAttribute: 'input-left',
        inputType: 'radio',
        inputChecked: true,
    },
];

export const sliderLabelData: ContentSwitcherProps['contentSwitcherObject']['SliderLabel'][] = [
    {
        forText: 'switch-left-1',
        labelAttribute: 'label-left',
        labelHead: 'Prepaid',
        labelSubhead: 'Residential',
    },
    {
        forText: 'switch-right-1',
        labelAttribute: 'label-eight',
        labelHead: 'Prepaid',
        labelSubhead: 'Business',
    },
];

export const switcherContentData: ContentSwitcherProps['contentSwitcherObject']['SwitcherContent'][] = [
    {
        contentAttribute: 'content-left',
        contentHeading: 'Left Content',
        contentPara:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum.',
    },
    {
        contentAttribute: 'content-right',
        contentHeading: 'Right Content',
        contentPara:
            'consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum.',
    },
];
