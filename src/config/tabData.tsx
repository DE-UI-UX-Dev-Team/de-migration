import { TabProps } from '../interfaces/Props';
import { AccordionProps } from '../interfaces/Props';
import ToggleSwitchComponent from '../components/ToggleSwitchComponent/ToggleSwitchComponent';
import toggleStates from './toggleStates';
import ParaComponent from '../components/ParaComponent';
import buttonData from './buttonData';
import ButtonItem from '../components/Buttons/ButtonItem';

export const tabDataWithIcon: TabProps[] = [
    {
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: 'Step1',
        tabContent: (
            <div className="row">
                <div className="col--lg-6">
                    <img
                        src="https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png"
                        className="img-fluid"
                        alt="some description"
                    />
                </div>
                <div className="col--lg-6">
                    <h2>What is the Internet of Things? </h2>
                    <h5>IoT</h5>
                    <p>
                        The internet of things (IoT) is the interconnection via the Internet of computing devices in
                        everyday objects, allowing them to send and receive data. Nowadays, these objects can range from
                        tech like your car and your phone to normal household items like your vacuum or even your
                        toothbrush. The data these items send and receive helps us give commands, track progress,
                        automate daily routines and much more.
                    </p>
                    <div className="text-center text-sm-left">
                        <a
                            className="button button-blue"
                            href="#"
                        >
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>
        ),
    },
    {
        tabIcon: 'icon-md fa-solid fa-image',
        tabTitle: 'Gas',
        tabContent: 'Tab 2 Content',
    },
    {
        tabIcon: 'icon-md fak fa-pen-solid',
        tabTitle: 'Natural',
        tabContent: 'Tab 3 Content',
    },
    {
        tabIcon: 'icon-md fak fa-thumbs-up-solid',
        tabTitle: 'Energy',
        tabContent: (
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
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: 'Billing',
        tabContent: 'Tab 5 Content',
    },
    {
        tabIcon: 'icon-md  fa-solid fa-star',
        tabTitle: 'Sample',
        tabContent: (
            <div className="row">
                <div className="col--lg-6">
                    <img
                        src="https://d38suhqqynrvtl.cloudfront.net/images/illustrations/lg_smart_home.png"
                        className="img-fluid"
                        alt="some description"
                    />
                </div>
                <div className="col--lg-6">
                    <h2>What is the Internet of Things? </h2>
                    <h5>IoT</h5>
                    <p>
                        The internet of things (IoT) is the interconnection via the Internet of computing devices in
                        everyday objects, allowing them to send and receive data. Nowadays, these objects can range from
                        tech like your car and your phone to normal household items like your vacuum or even your
                        toothbrush. The data these items send and receive helps us give commands, track progress,
                        automate daily routines and much more.
                    </p>
                    <div className="text-center text-sm-left">
                        <a
                            className="button button-blue"
                            href="#"
                        >
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>
        ),
    },
    {
        tabIcon: 'icon-md  fa-solid fa-star',
        tabTitle: 'Sample',
        tabContent: (
            <div className="row">
                <div className="col--lg-6">
                    <img
                        src="https://d38suhqqynrvtl.cloudfront.net/images/illustrations/lg_smart_home.png"
                        alt="some description"
                    />
                </div>
                <div className="col--lg-6">
                    <h2>What is the Internet of Things? </h2>
                    <h5>IoT</h5>
                    <p>
                        The internet of things (IoT) is the interconnection via the Internet of computing devices in
                        everyday objects, allowing them to send and receive data. Nowadays, these objects can range from
                        tech like your car and your phone to normal household items like your vacuum or even your
                        toothbrush. The data these items send and receive helps us give commands, track progress,
                        automate daily routines and much more.
                    </p>
                    <div className="text-center text-sm-left">
                        <a
                            className="button button-blue"
                            href="#"
                        >
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>
        ),
    },
];

export const tabData: TabProps[] = [
    {
        tabIcon: '',
        tabTitle: 'Step1',
        tabContent: (
            <div className="row">
                <div className="col--lg-6">
                    <img
                        src="https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png"
                        className="img-fluid"
                        alt="some description"
                    />
                </div>
                <div className="col--lg-6">
                    <h2>What is the Internet of Things? </h2>
                    <h5>IoT</h5>
                    <p>
                        The internet of things (IoT) is the interconnection via the Internet of computing devices in
                        everyday objects, allowing them to send and receive data. Nowadays, these objects can range from
                        tech like your car and your phone to normal household items like your vacuum or even your
                        toothbrush. The data these items send and receive helps us give commands, track progress,
                        automate daily routines and much more.
                    </p>
                    <div className="text-center text-sm-left">
                        <a
                            className="button button-blue"
                            href="#"
                        >
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>
        ),
    },
    {
        tabIcon: '',
        tabTitle: 'Gas',
        tabContent: 'Tab 2 Content',
    },
    {
        tabIcon: '',
        tabTitle: 'Natural',
        tabContent: 'Tab 3 Content',
    },
    {
        tabIcon: '',
        tabTitle: 'Energy',
        tabContent: (
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
        tabIcon: '',
        tabTitle: 'Billing',
        tabContent: 'Tab 5 Content',
    },
    {
        tabIcon: '',
        tabTitle: 'Sample',
        tabContent: (
            <div className="row">
                <div className="col--lg-6">
                    <img
                        src="https://d38suhqqynrvtl.cloudfront.net/images/illustrations/lg_smart_home.png"
                        className="img-fluid"
                        alt="some description"
                    />
                </div>
                <div className="col--lg-6">
                    <h2>What is the Internet of Things? </h2>
                    <h5>IoT</h5>
                    <p>
                        The internet of things (IoT) is the interconnection via the Internet of computing devices in
                        everyday objects, allowing them to send and receive data. Nowadays, these objects can range from
                        tech like your car and your phone to normal household items like your vacuum or even your
                        toothbrush. The data these items send and receive helps us give commands, track progress,
                        automate daily routines and much more.
                    </p>
                    <div className="text-center text-sm-left">
                        <a
                            className="button button-blue"
                            href="#"
                        >
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>
        ),
    },
    {
        tabIcon: '',
        tabTitle: 'Sample',
        tabContent: (
            <div className="row">
                <div className="col--lg-6">
                    <img
                        src="https://d38suhqqynrvtl.cloudfront.net/images/illustrations/lg_smart_home.png"
                        alt="some description"
                    />
                </div>
                <div className="col--lg-6">
                    <h2>What is the Internet of Things? </h2>
                    <h5>IoT</h5>
                    <p>
                        The internet of things (IoT) is the interconnection via the Internet of computing devices in
                        everyday objects, allowing them to send and receive data. Nowadays, these objects can range from
                        tech like your car and your phone to normal household items like your vacuum or even your
                        toothbrush. The data these items send and receive helps us give commands, track progress,
                        automate daily routines and much more.
                    </p>
                    <div className="text-center text-sm-left">
                        <a
                            className="button button-blue"
                            href="#"
                        >
                            LEARN MORE
                        </a>
                    </div>
                </div>
            </div>
        ),
    },
];

export const tabDataWithBlock: TabProps[] = [
    {
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: 'Step1',
        tabContent: (
            <div className="row">
                <div className="col">
                    <p className="fs--text-center">
                        For this example, let’s assume the sum of your last 12 months of bills has the following
                        charges.{' '}
                    </p>
                    <p>Annual Energy Usage: 1200 kWh</p>
                    <p>Unpaid Balance (if applicable): $50.00</p>
                </div>
            </div>
        ),
    },
    {
        tabIcon: 'icon-md fa-solid fa-image',
        tabTitle: 'Step 2',
        tabContent: 'Tab 2 Content',
    },
    {
        tabIcon: 'icon-md fak fa-pen-solid',
        tabTitle: 'Step 3',
        tabContent: 'Tab 3 Content',
    },
    {
        tabIcon: 'icon-md fak fa-thumbs-up-solid',
        tabTitle: 'Step 4',
        tabContent: (
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
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: 'Step 5',
        tabContent: 'Tab 5 Content',
    },
];

export const tabDataWithBlockColumns: TabProps[] = [
    {
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: 'Electric Utilities',
        tabContent: (
            <div className="row fs--text-center">
                <div className="col--md-4 col--lg-3">
                    <i className="icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15"></i>
                    <h4>Utility Company Name</h4>
                    <p className="hours p-1 mg-b--0">
                        <a href="tel:1-855-936-6417">1-855-936-6417</a>
                    </p>
                </div>
                <div className="col--md-4 col--lg-3">
                    <i className="icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15"></i>
                    <h4>Utility Company Name</h4>
                    <p className="hours p-1 mg-b--0">
                        <a href="tel:1-855-936-6417">1-855-936-6417</a>
                    </p>
                </div>
                <div className="col--md-4 col--lg-3">
                    <i className="icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15"></i>
                    <h4>Utility Company Name</h4>
                    <p className="hours p-1 mg-b--0">
                        <a href="tel:1-855-936-6417">1-855-936-6417</a>
                    </p>
                </div>
                <div className="col--md-4 col--lg-3">
                    <i className="icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15"></i>
                    <h4>Utility Company Name</h4>
                    <p className="hours p-1 mg-b--0">
                        <a href="tel:1-855-936-6417">1-855-936-6417</a>
                    </p>
                </div>
            </div>
        ),
    },
    {
        tabIcon: 'icon-md fa-solid fa-image',
        tabTitle: 'Natural Gas Utilities',
        tabContent: (
            <div className="row fs--text-center">
                <div className="col--md-4 col--lg-3">
                    <i className="icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15"></i>
                    <h4>Utility Company Name</h4>
                    <p className="hours p-1 mg-b--0">
                        <a href="tel:1-855-936-6417">1-855-936-6417</a>
                    </p>
                </div>
                <div className="col--md-4 col--lg-3">
                    <i className="icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15"></i>
                    <h4>Utility Company Name</h4>
                    <p className="hours p-1 mg-b--0">
                        <a href="tel:1-855-936-6417">1-855-936-6417</a>
                    </p>
                </div>
                <div className="col--md-4 col--lg-3">
                    <i className="icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15"></i>
                    <h4>Utility Company Name</h4>
                    <p className="hours p-1 mg-b--0">
                        <a href="tel:1-855-936-6417">1-855-936-6417</a>
                    </p>
                </div>
                <div className="col--md-4 col--lg-3">
                    <i className="icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15"></i>
                    <h4>Utility Company Name</h4>
                    <p className="hours p-1 mg-b--0">
                        <a href="tel:1-855-936-6417">1-855-936-6417</a>
                    </p>
                </div>
            </div>
        ),
    },
    {
        tabIcon: 'icon-md fa-solid fa-image',
        tabTitle: 'Natural Gas Utilities',
        tabContent: (
            <div className="row fs--text-center">
                <div className="col--md-4 col--lg-3">
                    <i className="icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15"></i>
                    <h4>Utility Company Name</h4>
                    <p className="hours p-1 mg-b--0">
                        <a href="tel:1-855-936-6417">1-855-936-6417</a>
                    </p>
                </div>
                <div className="col--md-4 col--lg-3">
                    <i className="icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15"></i>
                    <h4>Utility Company Name</h4>
                    <p className="hours p-1 mg-b--0">
                        <a href="tel:1-855-936-6417">1-855-936-6417</a>
                    </p>
                </div>
                <div className="col--md-4 col--lg-3">
                    <i className="icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15"></i>
                    <h4>Utility Company Name</h4>
                    <p className="hours p-1 mg-b--0">
                        <a href="tel:1-855-936-6417">1-855-936-6417</a>
                    </p>
                </div>
                <div className="col--md-4 col--lg-3">
                    <i className="icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15"></i>
                    <h4>Utility Company Name</h4>
                    <p className="hours p-1 mg-b--0">
                        <a href="tel:1-855-936-6417">1-855-936-6417</a>
                    </p>
                </div>
            </div>
        ),
    },
];
