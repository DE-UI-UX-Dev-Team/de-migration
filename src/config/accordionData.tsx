import { AccordionProps } from '../interfaces/Props';
import ToggleSwitchComponent from '../components/ToggleSwitchComponent/ToggleSwitchComponent';
import toggleStates from '../config/toggleStates';
import ParaComponent from '../components/ParaComponent';
import buttonData from './buttonData';
import ButtonItem from '../components/Buttons/ButtonItem';

const accordionData: AccordionProps[] = [
    {
        accordionTitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua? ',
        accordionContent: (
            <ParaComponent text="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum " />
        ),
    },
    {
        accordionTitle:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum?',
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
        accordionTitle:
            'enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?',
        accordionContent: (
            <ParaComponent text="Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum " />
        ),
    },
    {
        accordionTitle: 'How Would Average Billing Help You?',
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
