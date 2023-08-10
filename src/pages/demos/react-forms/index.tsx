import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    CheckboxesForm,
    DisabledForm,
    InputButtonsForm,
    RadioButtonsForm,
    SampleForm,
    TextInputForm,
} from '../../../components/Forms/Form';
import { formDesc } from '../../../local/en/forms/constants';

const App: React.FC = () => {
    return (
        <section>
            <div className="container max-width--md">
                <div className="row">
                    <div className="col">
                        <p>
                            <button
                                className="btn--tertiary"
                                id="contrast"
                            >
                                <i className="fak fa-eye-solid"></i>Test Contrast
                            </button>
                        </p>
                    </div>
                    <div className="col">
                        <h1>Form Components</h1>
                        <p>{formDesc}</p>
                    </div>
                </div>
                <>
                    <SampleForm />
                    <DisabledForm />
                    <TextInputForm />
                    <RadioButtonsForm />
                    <CheckboxesForm />
                    <InputButtonsForm />
                </>
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
