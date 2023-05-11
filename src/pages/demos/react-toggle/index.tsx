import ToggleSwitch from '../../../components/ToggleSwitch';
import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SampleComponent from '../../../components/SampleComponent';
import ToggleSwitchComponent from '../../../components/ToggleSwitchComponent/ToggleSwitchComponent';
import toggleStates from '../../../config/toggleStates';

const App: React.FC = () => {
    return (
        <section>
            <div className="container  max-width--sm">
                <div className="row fs--text-center">
                    <div className="col">
                        <SampleComponent text="Toggle Switches" />
                    </div>
                    <div className="col fs--text-center">
                        <ul className="fs--link-list">
                            <li>
                                <ToggleSwitchComponent switches={toggleStates} />
                            </li>
                        </ul>
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
