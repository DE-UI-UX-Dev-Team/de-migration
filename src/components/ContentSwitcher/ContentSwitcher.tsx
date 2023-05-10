import React from 'react';
import HiddenInput from '../ContentSwitcher/HiddenInput';
import SliderLabel from '../ContentSwitcher/SliderLabel';
import SwitcherContent from '../ContentSwitcher/SwitcherContent';

export interface ContentSwitcherProps {
    contentSwitcherObject: {
        HiddenInput: {
            inputId: string;
            inputName: string;
            inputAttribute: string;
            inputType: string;
            inputChecked: boolean;
        }[];

        SliderLabel: {
            labelAttribute: string;
            labelHead: string;
            labelSubhead: string;
            forText: string;
        }[];

        SwitcherContent: {
            contentAttribute: string;
            contentHeading: string;
            contentPara: string;
        }[];
    };
}

export const ContentSwitcher: React.FC<ContentSwitcherProps> = ({ contentSwitcherObject }) => {
    let hiddenInputs = [];
    for (let i = 0; i <= contentSwitcherObject.HiddenInput.length - 1; i++) {
        hiddenInputs.push(
            <HiddenInput
                inputId={contentSwitcherObject.HiddenInput[i].inputId}
                inputName={contentSwitcherObject.HiddenInput[i].inputName}
                inputAttribute={contentSwitcherObject.HiddenInput[i].inputAttribute}
                inputType={contentSwitcherObject.HiddenInput[i].inputType}
                inputChecked={contentSwitcherObject.HiddenInput[i].inputChecked}
            />
        );
    }

    let sliderLabels = [];
    for (let i = 0; i <= contentSwitcherObject.SliderLabel.length - 1; i++) {
        sliderLabels.push(
            <SliderLabel
                forText={contentSwitcherObject.SliderLabel[i].forText}
                labelAttribute={contentSwitcherObject.SliderLabel[i].labelAttribute}
                labelHead={contentSwitcherObject.SliderLabel[i].labelHead}
                labelSubhead={contentSwitcherObject.SliderLabel[i].labelSubhead}
            />
        );
    }

    let switcherContents = [];
    for (let i = 0; i <= contentSwitcherObject.SwitcherContent.length - 1; i++) {
        switcherContents.push(
            <SwitcherContent
                contentAttribute={contentSwitcherObject.SwitcherContent[i].contentAttribute}
                contentHeading={contentSwitcherObject.SwitcherContent[i].contentHeading}
                contentPara={contentSwitcherObject.SwitcherContent[i].contentPara}
            />
        );
    }

    return (
        <div className="content-switcher">
            {hiddenInputs}

            <div className="content-switcher--pill">
                {sliderLabels}
                <div className="content-switcher--slider"></div>
            </div>

            {switcherContents}
        </div>
    );
};

export default ContentSwitcher;
