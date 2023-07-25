import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Dropdown from '../../../components/Dropdown/Dropdown';
import { DropdownOption } from '../../../interfaces/Props';

const options: DropdownOption[] = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];

const App: React.FC = () => {
    const handleSelectOption = (selectedOption: DropdownOption) => {
        console.log('Selected option:', selectedOption);
        // Do something with the selected option.
    };

    return (
        <div>
            <section>
                <div className="container">
                    <div className="dropdown-container">
                        <p>Square Feet *</p>
                        <Dropdown
                            options={options}
                            onSelectOption={handleSelectOption}
                        />
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
