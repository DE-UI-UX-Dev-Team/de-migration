import '../../../styles/main.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../../../components/Dropdowns/Dropdown';
import { DropdownOption } from '../../../interfaces/Props';

const optionsLong: DropdownOption[] = [
    { value: 'option1', label: 'Long Text Label' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
    { value: 'option6', label: 'Option 6' },
    { value: 'option7', label: 'Option 7' },
];

const optionsShort: DropdownOption[] = [
    { value: 'option1', label: 'option1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

const App: React.FC = () => {
    const [selectedOptionBasic, setSelectedOptionBasic] = useState<DropdownOption | null>(null);
    const [selectedOptionRequired, setSelectedOptionRequired] = useState<DropdownOption | null>(null);
    const [selectedOptionEllipsisIcon, setSelectedOptionEllipsisIcon] = useState<DropdownOption | null>(null);
    const [selectedOptionCircleIcon, setSelectedOptionCircleIcon] = useState<DropdownOption | null>(null);
    const [error, setError] = useState(false);

    const handleSelectOptionBasic = (selectedOption: DropdownOption) => {
        setSelectedOptionBasic(selectedOption);
        setError(false);
    };

    const handleSelectOptionEllipsisIcon = (selectedOption: DropdownOption) => {
        setSelectedOptionEllipsisIcon(selectedOption);
        setError(false);
    };

    const handleSelectOptionCircleIcon = (selectedOption: DropdownOption) => {
        setSelectedOptionCircleIcon(selectedOption);
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
        setSelectedOptionEllipsisIcon(null);
        setSelectedOptionCircleIcon(null);
        setError(false);
    };

    return (
        <>
            <section>
                <h2 className="fs--text-center">1. Dropdowns - BG Light</h2>
                <div className="container max-width--md">
                    <form
                        onSubmit={handleSubmit}
                        onReset={handleReset}
                    >
                        <div className="row">
                            <div className="dropdown-basic col--md-4">
                                <Dropdown
                                    options={optionsLong}
                                    selectedOption={selectedOptionBasic}
                                    onSelectOption={handleSelectOptionBasic}
                                />
                            </div>
                            <div className="dropdown-requried col--md-4">
                                <Dropdown
                                    options={optionsLong}
                                    selectedOption={selectedOptionRequired}
                                    onSelectOption={handleSelectOptionRequired}
                                />
                                {error && <div className="validation-message">Field is required </div>}
                            </div>

                            <div className="dropdown-input-button col--md-odd-3 ">
                                <Dropdown
                                    options={optionsShort}
                                    selectedOption={selectedOptionEllipsisIcon}
                                    onSelectOption={handleSelectOptionEllipsisIcon}
                                    dropdownInput={
                                        <input
                                            className="btn--tertiary"
                                            type="button"
                                            value="Dropdown Button"
                                        />
                                    }
                                />
                            </div>
                            <div className="dropdown-icon-button col--md-odd-3 col--sm-2">
                                <Dropdown
                                    options={optionsShort}
                                    selectedOption={selectedOptionCircleIcon}
                                    onSelectOption={handleSelectOptionCircleIcon}
                                    dropdownIcon={<i className="fa-circle-info-solid fak "></i>}
                                />
                            </div>
                            <div className="dropdown-icon-button col--md-odd-3 col--sm-2">
                                <Dropdown
                                    options={optionsLong}
                                    selectedOption={selectedOptionEllipsisIcon}
                                    onSelectOption={handleSelectOptionEllipsisIcon}
                                    dropdownIcon={<i className="fa-regular fa-ellipsis-vertical"></i>}
                                />
                            </div>

                            <div className="col fs--text-center">
                                <div>
                                    <button
                                        type="submit"
                                        className="btn--primary"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="reset"
                                        onClick={handleReset}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section className="bg--tertiary-base">
                <h2 className="fs--text-center">2. Dropdowns - BG Dark</h2>
                <div className="container max-width--md">
                    <form
                        onSubmit={handleSubmit}
                        onReset={handleReset}
                    >
                        <div className="row">
                            <div className="dropdown-basic col--md-4">
                                <Dropdown
                                    options={optionsLong}
                                    selectedOption={selectedOptionBasic}
                                    onSelectOption={handleSelectOptionBasic}
                                />
                            </div>
                            <div className="dropdown-requried col--md-4">
                                <Dropdown
                                    options={optionsLong}
                                    selectedOption={selectedOptionRequired}
                                    onSelectOption={handleSelectOptionRequired}
                                />
                                {error && <div className="validation-message">Field is required </div>}
                            </div>

                            <div className="dropdown-input-button col--md-odd-3">
                                <Dropdown
                                    options={optionsShort}
                                    selectedOption={selectedOptionEllipsisIcon}
                                    onSelectOption={handleSelectOptionEllipsisIcon}
                                    dropdownInput={
                                        <input
                                            className="btn--tertiary"
                                            type="button"
                                            value="Dropdown Button"
                                        />
                                    }
                                />
                            </div>
                            <div className="dropdown-icon-button col--md-odd-3 col--sm-2">
                                <Dropdown
                                    options={optionsShort}
                                    selectedOption={selectedOptionCircleIcon}
                                    onSelectOption={handleSelectOptionCircleIcon}
                                    dropdownIcon={<i className="fa-circle-info-solid fak "></i>}
                                />
                            </div>
                            <div className="dropdown-icon-button col--md-odd-3 col--sm-2">
                                <Dropdown
                                    options={optionsLong}
                                    selectedOption={selectedOptionEllipsisIcon}
                                    onSelectOption={handleSelectOptionEllipsisIcon}
                                    dropdownIcon={<i className="fa-regular fa-ellipsis-vertical"></i>}
                                />
                            </div>

                            <div className="col fs--text-center">
                                <div>
                                    <button
                                        type="submit"
                                        className="btn--primary"
                                    >
                                        Submit
                                    </button>
                                    <button
                                        type="reset"
                                        onClick={handleReset}
                                    >
                                        Reset
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
