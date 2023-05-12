import React from 'react';
import ReactDOM from 'react-dom';
import { ContentSwitcherComponent } from '../../../components/ContentSwitcher/ContentSwitcherComponent';
import '../../../styles/main.scss';
import { hiddenInputData, sliderLabelData, switcherContentData } from '../../../config/contentSwitcherData';

const App: React.FC = () => {
    return (
        <section className="bg--tertiary-base">
            <div className="container">
                <div className="row fs--text-center">
                    <div className="col">
                        <h2>Content Switcher</h2>
                    </div>
                    <div className="col">
                        <ContentSwitcherComponent
                            hiddenInputs={hiddenInputData}
                            sliderLabels={sliderLabelData}
                            switcherContents={switcherContentData}
                        />
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
