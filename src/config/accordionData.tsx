import { AccordionProps } from '../interfaces/Props';
import ToggleSwitchComponent from '../components/ToggleSwitchComponent/ToggleSwitchComponent';
import toggleStates from '../config/toggleStates';
import SampleComponent from '../components/SampleComponent';
import buttonData from './buttonData';
import ButtonItem from '../components/Buttons/ButtonItem';
import { accordionInfo } from '../local/en/accordions/constants';

const accordionData: AccordionProps[] = [
    {
        accordionTitle: `${accordionInfo.titleOne}`,
        accordionContent: <SampleComponent text={accordionInfo.contentOne} />,
    },
    {
        accordionTitle: `${accordionInfo.titleTwo}`,
        accordionContent: (
            <div className="col fs--text-center">
                {buttonData.map((buttonDataItems) => (
                    <div className="col--md-odd-1">
                        <ButtonItem
                            buttonType={buttonDataItems.buttonType}
                            buttonLabel={buttonDataItems.buttonLabel}
                            buttonIconLeft={buttonDataItems.buttonIconLeft}
                            buttonIconRight={buttonDataItems.buttonIconRight}
                        />
                    </div>
                ))}
            </div>
        ),
    },
    {
        accordionTitle: `${accordionInfo.titleThree}`,
        accordionContent: <SampleComponent text={accordionInfo.contentOne} />,
    },
    {
        accordionTitle: `${accordionInfo.titleFour}`,
        accordionContent: (
            <div className="col fs--text-center">
                <ul className="fs--link-list">
                    <li>
                        <ToggleSwitchComponent switches={toggleStates} />
                    </li>
                </ul>
            </div>
        ),
    },
];

export default accordionData;
