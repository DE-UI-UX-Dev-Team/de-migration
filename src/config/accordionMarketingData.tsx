import React from 'react';
import ButtonItem from '../components/Buttons/ButtonItem';
import ContentSwitcherComponent from '../components/ContentSwitcher/ContentSwitcherComponent';
import { hiddenInputData, sliderLabelData, switcherContentData } from '../config/contentSwitcherData';

import { AccordionProps } from '../interfaces/Props';
import buttonData from './buttonData';
import { ButtonProps } from '../interfaces/Props';
import { accordionInfo } from '../local/en/accordions/constants';

const accordionMarketingData: AccordionProps[] = [
    {
        accordionTitle: `<i class="fak fa-prime-logo-solid"></i>${accordionInfo.titleAmazonPrime}`,
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
