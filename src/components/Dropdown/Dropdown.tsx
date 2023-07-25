import React, { useState } from 'react';
import { DropdownOption, DropdownProps } from '../../interfaces/Props';

const Dropdown: React.FC<DropdownProps> = ({ options, onSelectOption }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);

    const handleDropdownClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: DropdownOption) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelectOption(option);
    };

    return (
        <div className={`dropdown ${isOpen ? 'open' : ''}${selectedOption ? 'completed' : ''}`}>
            <div
                className="selected-option"
                onClick={handleDropdownClick}
            >
                <div> {selectedOption ? selectedOption.label : 'Select an option'}</div>
                <i className="fa-regular fa-angle-up fa-lg"></i>
            </div>
            {isOpen && (
                <ul className="options">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`option ${selectedOption === option ? 'selected' : ''}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
