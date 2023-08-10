import { ContentSwitcherProps } from '../interfaces/Props';
import { contentSwitcherInfo } from '../local/en/content-switcher/constants';

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
        labelHead: `${contentSwitcherInfo.labelHead}`,
        labelSubhead: `${contentSwitcherInfo.subheadResidential}`,
    },
    {
        forText: 'switch-right-1',
        labelAttribute: 'label-right',
        labelHead: `${contentSwitcherInfo.labelHead}`,
        labelSubhead: `${contentSwitcherInfo.subheadBusiness}`,
    },
];

export const switcherContentData: ContentSwitcherProps['contentSwitcherObject']['SwitcherContent'][] = [
    {
        contentAttribute: 'content-left',
        contentHeading: `${contentSwitcherInfo.contentHeadingLeft}`,
        contentPara: `${contentSwitcherInfo.contentDescLeft}`,
    },
    {
        contentAttribute: 'content-right',
        contentHeading: `${contentSwitcherInfo.contentHeadingRight}`,
        contentPara: `${contentSwitcherInfo.contentDescRight}`,
    },
];
