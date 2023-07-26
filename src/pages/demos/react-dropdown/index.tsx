import '../../../styles/main.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { DropdownOption } from '../../../interfaces/Props';

const options: DropdownOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
];

const App: React.FC = () => {
    const [selectedOptionBasic, setSelectedOptionBasic] = useState<DropdownOption | null>(null);
    const [selectedOptionRequired, setSelectedOptionRequired] = useState<DropdownOption | null>(null);
    const [error, setError] = useState(false);

    const handleSelectOptionBasic = (selectedOption: DropdownOption) => {
        setSelectedOptionBasic(selectedOption);
        setError(false);
    };

    const handleSelectOptionRequired = (selectedOption: DropdownOption | null) => {
        if (!selectedOption) {
            setError(true);
        } else {
            setError(false);
            setSelectedOptionRequired(selectedOption);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!selectedOptionRequired) {
            setError(true);
        }
    };

    const handleReset = () => {
        setSelectedOptionBasic(null);
        setSelectedOptionRequired(null);
        setError(false);
    };

    return (
        <div>
            <section>
                <div className="container max-width--md">
                    <div className="row">
                        <form onSubmit={handleSubmit}>
                            <div className="dropdown-basic col--md-4 col--lg-4">
                                <Dropdown
                                    options={options}
                                    selectedOption={selectedOptionBasic}
                                    onSelectOption={handleSelectOptionBasic}
                                />
                            </div>
                            <div className="dropdown-requried col--md-4 col--lg-4">
                                <Dropdown
                                    options={options}
                                    selectedOption={selectedOptionRequired}
                                    onSelectOption={handleSelectOptionRequired}
                                />
                                {error && <div className="validation-message">Field is required </div>}
                                <div className="col">
                                    <button
                                        type="submit"
                                        className="btn--primary"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
