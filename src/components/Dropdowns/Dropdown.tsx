import React, { useState, useRef, useEffect } from 'react';
import { DropdownOption, DropdownProps } from '../../interfaces/Props';
import { dropdownLabel, selectContent } from '../../local/en/dropdowns/constants';

const Dropdown: React.FC<DropdownProps> = ({
    options,
    onSelectOption,
    selectedOption,
    dropdownIcon,
    dropdownInput,
}) => {
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
            <p>{dropdownLabel}</p>
            <div
                ref={dropdownRef}
                className={` ${dropdownIcon ? 'dropdown-icon' : dropdownInput ? 'dropdown-input' : 'dropdown'}`}
            >
                {dropdownIcon ? (
                    <div onClick={handleDropdownClick}>{dropdownIcon}</div>
                ) : dropdownInput ? (
                    <div onClick={handleDropdownClick}>{dropdownInput}</div>
                ) : (
                    <div
                        className={`selected-option ${isOpen ? 'open' : ''} ${selectedOption ? 'completed' : ''}`}
                        onClick={handleDropdownClick}
                    >
                        <div className="completed-option">
                            {selectedOption ? selectedOption.label : `${selectContent}`}
                        </div>
                        {isOpen ? (
                            <i className="fa-regular fa-angle-down fa-lg"></i>
                        ) : (
                            <i className="fa-regular fa-angle-up fa-lg"></i>
                        )}
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
                                <div>{option.label}</div>
                                {selectedOption === option && <i className="fa-regular fa-check "></i>}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Dropdown;
