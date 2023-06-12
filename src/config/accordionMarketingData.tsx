import React from 'react';
import ButtonItem from '../components/Buttons/ButtonItem';
import ContentSwitcherComponent from '../components/ContentSwitcher/ContentSwitcherComponent';
import { hiddenInputData, sliderLabelData, switcherContentData } from '../config/contentSwitcherData';

import { AccordionProps } from '../interfaces/Props';
import buttonData from './buttonData';
import { ButtonProps } from '../interfaces/Props';

const accordionMarketingData: AccordionProps[] = [
    {
        accordionTitle: '<i class="fak fa-prime-logo-solid"></i>Your Next Steps for Amazon Prime on Us',
        accordionContent: (
            <div className="col">
                <ContentSwitcherComponent
                    hiddenInputs={hiddenInputData}
                    sliderLabels={sliderLabelData}
                    switcherContents={switcherContentData}
                />
            </div>
        ),
    },
];

export default accordionMarketingData;
