import { ContentSwitcherComponent } from '../components/ContentSwitcher/ContentSwitcherComponent';
import { hiddenInputData, sliderLabelData, switcherContentData } from '../config/contentSwitcherData';

export default {
    component: ContentSwitcherComponent,
    tags: ['autodocs'],
};

export const defaultContentSwitcher = {
    args: {
        hiddenInputs: hiddenInputData,
        sliderLabels: sliderLabelData,
        switcherContents: switcherContentData,
    },
};
