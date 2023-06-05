import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import SampleComponent from '../../../components/SampleComponent';
import buttonData from '../../../config/buttonData';
import inputButtonData from '../../../config/inputButtonData';
import ButtonItem from '../../../components/Buttons/ButtonItem';
import InputButtonItem from '../../../components/Buttons/InputButtonItem';

const App: React.FC = () => {
    return (
        <section>
            <div className="container  max-width--sm">
                <div className="row fs--text-center">
                    <div className="col">
                        <SampleComponent text="Buttons" />
                    </div>

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
                        {inputButtonData.map((inputButtonDataItems) => (
                            <div className="col--md-odd-1">
                                <InputButtonItem
                                    inputButtonType={inputButtonDataItems.inputButtonType}
                                    inputButtonValue={inputButtonDataItems.inputButtonValue}
                                    inputButtonIconLeft={inputButtonDataItems.inputButtonIconLeft}
                                    inputButtonIconRight={inputButtonDataItems.inputButtonIconRight}
                                />
                            </div>
                        ))}
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
