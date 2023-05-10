import React from 'react';
import ReactDOM from 'react-dom';
import ContentSwitcher from '../../../components/ContentSwitcher/ContentSwitcher';
import '../../../styles/main.scss';
import HiddenInput from '../../../components/ContentSwitcher/HiddenInput';
import SwitcherContent from '../../../components/ContentSwitcher/SwitcherContent';

const App = () => {
    const ContentSwitcherData = {
        HiddenInput: [
            {
                'inputId': 'switch-left-1',
                'inputName': 'switch-1',
                'inputAttribute': 'input-left',
                'inputType': 'radio',
                'inputChecked ': true,
            },
            {
                'inputId': 'switch-right-1',
                'inputName': 'switch-1',
                'inputAttribute': 'input-right',
                'inputType': 'radio',
                'inputChecked ': false,
            },
        ],

        SliderLabel: [
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
        ],

        SwitcherContent: [
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
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum.',
            },
        ],
    };

    return (
        <section className="bg--tertiary-base">
            <div className="container">
                <div className="row fs--text-center">
                    <div className="col">
                        <h2>Content Switcher</h2>
                    </div>
                    <div className="col">
                        <ContentSwitcher contentSwitcherObject={ContentSwitcherData} />
                    </div>
                </div>
            </div>
        </section>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
