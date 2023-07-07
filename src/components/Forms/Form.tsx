import React, { useState } from 'react';
import TextInput from './TextInput';
import RadioInputGroup from './RadioInput';
import CheckboxList from './CheckboxInput';
import {
    buttonsData,
    CheckboxesDisabledFormNested,
    CheckboxesHorizontalNested,
    CheckboxesSampleFormNested,
    CheckboxesVerticalNested,
    inputDisabledForm,
    inputSampleForm,
    inputTextInput,
    radioDisabledForm,
    radioHorizontal,
    radioSampleForm,
    radioVertical,
} from '../../config/formsData';
import Formbtn from './Formbtn';

export const SampleForm: React.FC = () => {
    const initialFormValues = {
        firstname: '',
        lastname: '',
        date: '',
        address: '',
    };
    const [values, setValues] = useState<{
        [key: string]: string;
        firstname: string;
        lastname: string;
        date: string;
        address: string;
    }>(initialFormValues);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleReset = () => {
        setValues(initialFormValues);
    };

    return (
        <div className="row">
            <div className="col">
                <form
                    onSubmit={handleSubmit}
                    onReset={handleReset}
                >
                    <fieldset>
                        <div className="row">
                            <div className="col">
                                <h2 className="h-3 mg-b--5">Sample Form</h2>
                                <h3 className="h-5">With Input Validation Plugin</h3>
                            </div>
                            {inputSampleForm.map((input) => (
                                <TextInput
                                    key={input.id}
                                    {...input}
                                    value={values[input.name]}
                                    onChange={onChange}
                                />
                            ))}

                            <div className="col--md-4">
                                <RadioInputGroup
                                    className="mg-l--0"
                                    radioData={radioSampleForm}
                                />
                            </div>
                            <div className="col--md-4">
                                <CheckboxList
                                    checkboxes={CheckboxesSampleFormNested}
                                    classNameDiv="mg-l--0"
                                />
                            </div>
                            <div className="col">
                                <input
                                    type="submit"
                                    value="Submit"
                                />
                                <input
                                    type="reset"
                                    value="Reset"
                                />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export const DisabledForm: React.FC = () => {
    return (
        <div className="row">
            <div className="col">
                <form>
                    <fieldset disabled>
                        <div className="row">
                            <div className="col">
                                <h2 className="h-3">Disabled Form/Read-only</h2>
                            </div>
                            {inputDisabledForm.map((input) => (
                                <TextInput
                                    key={input.id}
                                    {...input}
                                />
                            ))}

                            <div className="col--md-4">
                                <RadioInputGroup
                                    className="mg-l--0"
                                    radioData={radioDisabledForm}
                                />
                            </div>
                            <div className="col--md-4">
                                <CheckboxList
                                    checkboxes={CheckboxesDisabledFormNested}
                                    classNameDiv="mg-l--0"
                                />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export const TextInputForm: React.FC = () => {
    return (
        <div className="row">
            <div className="col">
                <form>
                    <fieldset>
                        <div className="row">
                            <div className="col">
                                <h2 className="h-3 mg-b--5">Text Input</h2>
                                <h3 className="h-5">With Decorative Icons & Field Resets</h3>
                            </div>

                            {inputTextInput.map((input) => (
                                <TextInput
                                    key={input.id}
                                    {...input}
                                />
                            ))}
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export const RadioButtonsForm: React.FC = () => {
    return (
        <div className="row">
            <div className="col">
                <form>
                    <fieldset>
                        <div className="row">
                            <div className="col">
                                <h2 className="h-3 mg-b--5">Radio Buttons</h2>
                            </div>
                            <div className="col">
                                <h3 className="h-4">Horizontal List</h3>
                                <RadioInputGroup
                                    className="display-flex mg-l--0 "
                                    radioData={radioHorizontal}
                                />
                            </div>
                            <div className="col">
                                <h3 className="h-4">Vertical List</h3>
                                <RadioInputGroup
                                    className="mg-l--0"
                                    radioData={radioVertical}
                                />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export const CheckboxesForm: React.FC = () => {
    return (
        <div className="row">
            <div className="col">
                <form>
                    <fieldset>
                        <div className="row">
                            <div className="col">
                                <h2 className="h-3 mg-b--5">Checkboxes</h2>
                            </div>
                            <div className="col">
                                <h3 className="h-4">Horizontal List</h3>
                                <CheckboxList
                                    checkboxes={CheckboxesHorizontalNested}
                                    classNameDiv="display-flex mg-l--0"
                                />
                            </div>
                            <div className="col">
                                <h3 className="h-4">Vertical List</h3>
                                <CheckboxList
                                    checkboxes={CheckboxesVerticalNested}
                                    classNameDiv="mg-l--0"
                                />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export const InputButtonsForm: React.FC = () => {
    return (
        <div className="row">
            <div className="col">
                <form>
                    <fieldset>
                        <div className="row">
                            <div className="col">
                                <h2 className="h-3 mg-b--5">Input Buttons</h2>
                            </div>
                            {buttonsData.map((button, index) => (
                                <Formbtn
                                    key={index}
                                    type={button.type}
                                    value={button.value}
                                    classNameLabel={button.classNameLabel}
                                    classNameInput={button.classNameInput}
                                />
                            ))}
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};
