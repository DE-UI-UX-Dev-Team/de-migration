import { CheckboxProps, FormbtnProps, RadioInputProps, TextInputProps } from '../interfaces/Props';
import { formHelpMessage, formInfo } from '../local/en/forms/constants';

// Text Input
export const inputSampleForm: TextInputProps[] = [
    {
        id: '236i',
        label: `${formInfo.firstNameLabel}`,
        name: 'first-name',
        placeholder: `${formInfo.firstNamePlaceholder}`,
        pattern: '[A-Za-z]{1,20}',
        errorMessage: `${formHelpMessage.nameError}`,
        required: true,
        className: 'wrap--text-input',
        classNameDiv: 'col--sm-2',
    },
    {
        id: '237i',
        label: `${formInfo.lastNameLabel}`,
        name: 'last-name',
        placeholder: `${formInfo.lastNamePlaceholder}`,
        pattern: '[A-Za-z]{1,20}',
        errorMessage: `${formHelpMessage.nameError}`,
        required: true,
        className: 'wrap--text-input',
        classNameDiv: 'col--sm-2',
    },
    {
        id: '238i',
        label: `${formInfo.dateLabel}`,
        name: 'date',
        placeholder: `${formInfo.datePlaceholder}`,
        pattern: '\\d{2}/\\d{2}/\\d{4}',
        errorMessage: `${formHelpMessage.dateError}`,
        required: true,
        className: 'wrap--text-input',
        classNameDiv: 'col',
    },
    {
        id: '239i',
        label: `${formInfo.addressLabel}`,
        name: 'street-address',
        placeholder: `${formInfo.addressPlaceholder}`,
        errorMessage: `${formHelpMessage.addressError}`,
        required: true,
        className: 'wrap--text-input has-lead-icon has-reset-button',
        classNameDiv: 'col',
        showIcon: true,
        showResetButton: true,
    },
];

export const inputDisabledForm: TextInputProps[] = [
    {
        id: '240d',
        label: `${formInfo.addressLabel}`,
        name: 'street-address',
        placeholder: `${formInfo.addressPlaceholder}`,
        errorMessage: `${formHelpMessage.addressError}`,
        required: true,
        className: 'wrap--text-input has-lead-icon',
        classNameDiv: 'col--sm-2',
        showIcon: true,
        showResetButton: true,
    },
    {
        id: '241d',
        label: `${formInfo.addressLabel}`,
        name: 'street-address',
        placeholder: `${formInfo.addressPlaceholder}`,
        errorMessage: `${formHelpMessage.addressError}`,
        className: 'wrap--text-input',
        classNameDiv: 'col--sm-2',
    },
    {
        id: '242d',
        label: `${formInfo.addressLabel}`,
        name: 'street-address',
        placeholder: `${formInfo.addressPlaceholder}`,
        required: true,
        errorMessage: `${formHelpMessage.addressError}`,
        className: 'wrap--text-input',
        classNameDiv: 'col',
    },
    {
        id: '243d',
        label: `${formInfo.addressLabel}`,
        name: 'street-address',
        placeholder: `${formInfo.addressPlaceholder}`,
        errorMessage: `${formHelpMessage.addressError}`,
        required: true,
        className: 'wrap--text-input has-lead-icon',
        classNameDiv: 'col',
        showIcon: true,
    },
    {
        id: '244d',
        label: `${formInfo.addressLabel}`,
        name: 'street-address',
        placeholder: `${formInfo.addressPlaceholder}`,
        errorMessage: `${formHelpMessage.addressError}`,
        required: true,
        className: 'wrap--text-input has-lead-icon',
        classNameDiv: 'col',
        showIcon: true,
    },
];

export const inputTextInput: TextInputProps[] = [
    {
        id: '250d',
        label: `${formInfo.addressLabel}`,
        name: 'street-address',
        placeholder: `${formInfo.addressPlaceholder}`,
        errorMessage: `${formHelpMessage.addressError}`,
        required: true,
        className: 'wrap--text-input has-lead-icon',
        classNameDiv: 'col--sm-2',
        showIcon: true,
    },
    {
        id: '251d',
        label: `${formInfo.addressLabel}`,
        name: 'street-address',
        placeholder: `${formInfo.addressPlaceholder}`,
        errorMessage: `${formHelpMessage.addressError}`,
        className: 'wrap--text-input',
        classNameDiv: 'col--sm-2',
    },
    {
        id: '252d',
        label: `${formInfo.addressLabel}`,
        name: 'street-address',
        placeholder: `${formInfo.addressPlaceholder}`,
        required: true,
        errorMessage: `${formHelpMessage.addressError}`,
        className: 'wrap--text-input has-reset-button',
        classNameDiv: 'col',
        showResetButton: true,
    },
    {
        id: '253d',
        label: `${formInfo.addressLabel}`,
        name: 'street-address',
        placeholder: `${formInfo.addressPlaceholder}`,
        errorMessage: `${formHelpMessage.addressError}`,
        required: true,
        className: 'wrap--text-input has-lead-icon has-reset-button',
        classNameDiv: 'col',
        showIcon: true,
        showResetButton: true,
    },
    {
        id: '254d',
        label: `${formInfo.addressLabel}`,
        name: 'street-address',
        placeholder: `${formInfo.addressPlaceholder}`,
        errorMessage: `${formHelpMessage.addressError}`,
        required: true,
        className: 'wrap--text-input has-lead-icon',
        classNameDiv: 'col',
        showIcon: true,
        disabled: true,
    },
];

// Radio Data
export const radioSampleForm: RadioInputProps[] = [
    { id: 'radio-91', name: 'radio5', value: '1', label: `${formInfo.radioOneLabel}` },
    { id: 'radio-92', name: 'radio5', value: '2', label: `${formInfo.radioTwoLabel}` },
    { id: 'radio-93', name: 'radio5', value: '3', label: `${formInfo.radioThreeLabel}` },
];

export const radioDisabledForm: RadioInputProps[] = [
    { id: 'radio-91z', name: 'radio5z', value: '1', label: `${formInfo.radioOneLabel}` },
    { id: 'radio-92x', name: 'radio5x', value: '2', label: `${formInfo.radioTwoLabel}` },
    { id: 'radio-93v', name: 'radio5v', value: '3', label: `${formInfo.radioThreeLabel}` },
];

export const radioHorizontal: RadioInputProps[] = [
    { id: 'radio-1', name: 'radio', value: '1', label: `${formInfo.radioOneLabel}` },
    { id: 'radio-2', name: 'radio', value: '2', label: `${formInfo.radioTwoLabel}` },
    { id: 'radio-5', name: 'radio', value: '3', label: `${formInfo.radioThreeLabel}` },
];

export const radioVertical: RadioInputProps[] = [
    { id: 'radio-15', name: 'radio2', value: '1', label: `${formInfo.radioOneLabel}` },
    { id: 'radio-25', name: 'radio2', value: '2', label: `${formInfo.radioTwoLabel}` },
    { id: 'radio-35', name: 'radio2', value: '3', label: `${formInfo.radioThreeLabel}` },
];

// Checkbox Data
export const CheckboxesSampleFormNested: CheckboxProps[] = [
    {
        id: 'checkbox-124',
        name: 'checkbox124',
        value: '1',
        label: `${formInfo.checkboxOneLabel}`,
        className: 'nested-checklist wrap--checkbox-input',
        nestedCheckboxes: [
            {
                id: 'checkbox-2234',
                name: 'checkbox2234',
                value: '1',
                label: `${formInfo.checkboxTwoLabel}`,
                className: 'wrap--checkbox-input',
            },
            {
                id: 'checkbox-5234',
                name: 'checkbox5234',
                value: '1',
                label: `${formInfo.checkboxThreeLabel}`,
                className: 'wrap--checkbox-input',
            },
        ],
    },
];

export const CheckboxesDisabledFormNested: CheckboxProps[] = [
    {
        id: 'checkbox-124z',
        name: 'checkbox124z',
        value: '1',
        label: `${formInfo.checkboxOneLabel}`,
        className: 'nested-checklist wrap--checkbox-input',
        nestedCheckboxes: [
            {
                id: 'checkbox-2234z',
                name: 'checkbox2234z',
                value: '1',
                label: `${formInfo.checkboxTwoLabel}`,
                className: 'wrap--checkbox-input',
            },
            {
                id: 'checkbox-5234z',
                name: 'checkbox5234z',
                value: '1',
                label: `${formInfo.checkboxThreeLabel}`,
                className: 'wrap--checkbox-input',
            },
        ],
    },
];

export const CheckboxesHorizontalNested: CheckboxProps[] = [
    {
        id: 'checkbox-1',
        name: 'checkbox1',
        value: '1',
        label: `${formInfo.checkboxOneLabel}`,
        className: 'wrap--checkbox-input',
    },
    {
        id: 'checkbox-2',
        name: 'checkbox2',
        value: '2',
        label: `${formInfo.checkboxTwoLabel}`,
        className: 'wrap--checkbox-input',
    },
    {
        id: 'checkbox-5',
        name: 'checkbox5',
        value: '3',
        label: `${formInfo.checkboxThreeLabel}`,
        className: 'wrap--checkbox-input',
    },
];

export const CheckboxesVerticalNested: CheckboxProps[] = [
    {
        id: 'checkbox-12',
        name: 'checkbox12',
        value: '1',
        label: `${formInfo.checkboxOneLabel}`,
        className: 'nested-checklist wrap--checkbox-input',
        nestedCheckboxes: [
            {
                id: 'checkbox-223',
                name: 'checkbox223',
                value: '1',
                label: `${formInfo.checkboxTwoLabel}`,
                className: 'wrap--checkbox-input',
            },
            {
                id: 'checkbox-523',
                name: 'checkbox523',
                value: '1',
                label: `${formInfo.checkboxThreeLabel}`,
                className: 'wrap--checkbox-input',
            },
        ],
    },
    {
        id: 'checkbox-22',
        name: 'checkbox22',
        value: '1',
        label: `${formInfo.checkboxTwoLabel}`,
        className: 'wrap--checkbox-input',
    },
    {
        id: 'checkbox-52',
        name: 'checkbox52',
        value: '1',
        label: `${formInfo.checkboxThreeLabel}`,
        className: 'wrap--checkbox-input',
    },
];

// Button Data
export const buttonsData: FormbtnProps[] = [
    { type: 'submit', value: `${formInfo.submitInput}`, classNameInput: 'center-block' },
    { type: 'reset', value: `${formInfo.resetInput}`, classNameInput: 'center-block' },
    { type: 'button', value: `${formInfo.buttonInput}`, classNameInput: 'center-block' },
    {
        type: 'submit',
        value: `${formInfo.submitInput}`,
        classNameInput: 'icon fa-pen-solid',
    },
    { type: 'reset', value: `${formInfo.resetInput}`, classNameInput: 'center-block icon fa-pen-solid' },
    { type: 'button', value: `${formInfo.buttonInput}`, classNameInput: 'center-block icon fa-pen-solid' },
    {
        type: 'submit',
        value: `${formInfo.submitInput}`,
        classNameLabel: 'icon-right',
        classNameInput: 'icon fa-pen-solid',
    },
    {
        type: 'reset',
        value: `${formInfo.resetInput}`,
        classNameLabel: 'icon-right',
        classNameInput: 'center-block icon fa-pen-solid',
    },
    {
        type: 'button',
        value: `${formInfo.buttonInput}`,
        classNameLabel: 'icon-right',
        classNameInput: 'center-block icon fa-pen-solid',
    },
];
