import React from 'react';
import ReactDOM from 'react-dom';
import SampleComponent from '../../../components/SampleComponent';
import ToggleSwitch from '../../../components/ToggleSwitch';
import '../../../styles/main.scss';

const App = () => {
    const toggleStates = [
        {
            disabled: false,
            checked: true,
            toggleText: 'Switch On',
        },
        {
            disabled: false,
            checked: false,
            toggleText: 'Switch Off',
        },
        {
            disabled: true,
            checked: true,
            toggleText: 'Switch On - Disabled',
        },
        {
            disabled: true,
            checked: false,
            toggleText: 'Switch Off - Disabled',
        },
    ];

    let listItems = [];
    for (let i = 0; i <= toggleStates.length - 1; i++) {
        listItems.push(
            <li>
                <ToggleSwitch
                    checked={toggleStates[i].checked}
                    disabled={toggleStates[i].disabled}
                    toggleLabel={toggleStates[i].toggleText}
                />
            </li>
        );
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <SampleComponent text="React - Toggle project" />
                        <ul className="fs--link-list">{listItems}</ul>
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
