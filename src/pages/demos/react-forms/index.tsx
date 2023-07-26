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

                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae commodi incidunt quis
                            deserunt maiores ipsam quisquam, tempore hic eveniet illo, ut quia expedita? Molestias
                            quibusdam ipsum eos laborum. Voluptatem, at?
                        </p>
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
