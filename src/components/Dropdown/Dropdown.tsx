import React, { useState, useRef, useEffect } from 'react';
import { DropdownOption, DropdownProps } from '../../interfaces/Props';

const Dropdown: React.FC<DropdownProps> = ({ options, onSelectOption, selectedOption, dropdownIcon }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pageClickEvent = (e: MouseEvent) => {
            if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('click', pageClickEvent);
        }

        return () => {
            window.removeEventListener('click', pageClickEvent);
        };
    }, [isOpen]);

    const handleDropdownClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: DropdownOption) => {
        setIsOpen(false);
        onSelectOption(option);
    };

    return (
        <>
            <p>Square Feet</p>
            <div
                ref={dropdownRef}
                className={`dropdown ${dropdownIcon ? 'dropdown-icon' : ''} ${isOpen ? 'open' : ''}${
                    selectedOption ? 'completed' : ''
                }`}
            >
                {dropdownIcon ? (
                    <div onClick={handleDropdownClick}>{dropdownIcon}</div>
                ) : (
                    <div
                        className="selected-option"
                        onClick={handleDropdownClick}
                    >
                        <div> {selectedOption ? selectedOption.label : 'Select Option'}</div>
                        <i className="fa-regular fa-angle-up fa-lg"></i>
                    </div>
                )}
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
        </>
    );
};

export default Dropdown;
