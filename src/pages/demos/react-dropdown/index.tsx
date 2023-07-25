import '../../../styles/main.scss';
import React from 'react';
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
    const handleSelectOption = (selectedOption: DropdownOption) => {
        console.log('Selected option:', selectedOption);
    };

    return (
        <div>
            <section>
                <div className="container max-width--md">
                    <div className="row">
                        <div className="dropdown-basic col--md-4 col--lg-4">
                            <p>Square Feet</p>
                            <Dropdown
                                options={options}
                                onSelectOption={handleSelectOption}
                            />
                        </div>
                        <div className="dropdown-requried col--md-4 col--lg-4">
                            <p>Square Feet</p>
                            <Dropdown
                                options={options}
                                onSelectOption={handleSelectOption}
                            />
                        </div>
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
