import React, { useState } from 'react';
import { DropdownOption, DropdownOptions } from '../../interfaces/Props';
import Dropdown from './Dropdown';
import { optionsLong, optionsShort } from '../../config/dropdownData';
import { btns, fieldRequired } from '../../local/en/dropdowns/constants';

export const DropdownGroup: React.FC = () => {
    const [dropdownOptions, setDropdownOptions] = useState<DropdownOptions>({
        basic: null,
        required: null,
        ellipsisIcon: null,
        circleIcon: null,
    });

    const [error, setError] = useState(false);

    const handleSelectOption = (type: keyof DropdownOptions, selectedOption: DropdownOption | null) => {
        setDropdownOptions((prevOptions) => ({ ...prevOptions, [type]: selectedOption }));
        setError(type === 'required' && !selectedOption);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!dropdownOptions.required) {
            setError(true);
        }
    };

    const handleReset = () => {
        setDropdownOptions({
            basic: null,
            required: null,
            ellipsisIcon: null,
            circleIcon: null,
        });
        setError(false);
    };

    return (
        <div className="container max-width--md">
            <form
                onSubmit={handleSubmit}
                onReset={handleReset}
            >
                <div className="row">
                    <div className="dropdown-basic col--md-4">
                        <Dropdown
                            options={optionsLong}
                            selectedOption={dropdownOptions.basic}
                            onSelectOption={(option) => handleSelectOption('basic', option)}
                        />
                    </div>
                    <div className="dropdown-requried col--md-4">
                        <Dropdown
                            options={optionsLong}
                            selectedOption={dropdownOptions.required}
                            onSelectOption={(option) => handleSelectOption('required', option)}
                        />
                        {error && <div className="validation-message">{fieldRequired}</div>}
                    </div>

                    <div className="dropdown-icon-button col--sm-2">
                        <Dropdown
                            options={optionsShort}
                            selectedOption={dropdownOptions.circleIcon}
                            onSelectOption={(option) => handleSelectOption('circleIcon', option)}
                            dropdownIcon={<i className="fa-circle-info-solid fak "></i>}
                        />
                    </div>
                    <div className="dropdown-icon-button  col--sm-2">
                        <Dropdown
                            options={optionsLong}
                            selectedOption={dropdownOptions.ellipsisIcon}
                            onSelectOption={(option) => handleSelectOption('ellipsisIcon', option)}
                            dropdownIcon={<i className="fa-regular fa-ellipsis-vertical"></i>}
                        />
                    </div>

                    <div className="col dropdown-buttons">
                        <button
                            type="submit"
                            className="btn--primary"
                        >
                            {btns.btnSubmit}
                        </button>
                        <button type="reset">{btns.btnReset}</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
