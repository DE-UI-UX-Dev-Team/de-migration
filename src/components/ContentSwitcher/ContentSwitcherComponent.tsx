import React from 'react';
import HiddenInput from './HiddenInput';
import SliderLabel from './SliderLabel';
import SwitcherContent from './SwitcherContent';
import { ContentSwitcherProps } from '../../interfaces/Props';

interface ContentSwitcherComponentProps {
    hiddenInputs: ContentSwitcherProps['contentSwitcherObject']['hiddenInput'][];
    sliderLabels: ContentSwitcherProps['contentSwitcherObject']['SliderLabel'][];
    switcherContents: ContentSwitcherProps['contentSwitcherObject']['SwitcherContent'][];
}

export const ContentSwitcherComponent: React.FC<ContentSwitcherComponentProps> = ({
    hiddenInputs,
    sliderLabels,
    switcherContents,
}) => {
    return (
        <div className="content-switcher">
            {hiddenInputs.map((hiddenInputItem) => (
                <HiddenInput hiddenInputItem={hiddenInputItem} />
            ))}

            <div className="content-switcher--pill">
                {sliderLabels.map((sliderLabelItem) => (
                    <SliderLabel sliderLabelItem={sliderLabelItem} />
                ))}
                <div className="content-switcher--slider"></div>
            </div>

            {switcherContents.map((switcherContentItem) => (
                <SwitcherContent switcherContentItem={switcherContentItem} />
            ))}
        </div>
    );
};

export default ContentSwitcherComponent;
