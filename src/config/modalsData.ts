import { RadioInputProps, TextInputProps } from '../interfaces/Props';

// Modal Radio Data
export const radioServiceLocation: RadioInputProps[] = [
    { id: 'radio-91', name: 'radio5', value: '1', label: 'Texas Postpaid (get a bill every month)' },
    { id: 'radio-92', name: 'radio5', value: '2', label: 'Texas Prepaid (pay as you go)' },
    { id: 'radio-93', name: 'radio5', value: '3', label: 'Alberta' },
    { id: 'radio-94', name: 'radio5', value: '4', label: 'Other' },
];

export const radioPaymentMethod: RadioInputProps[] = [
    { id: 'radio-191', name: 'radio5', value: '1', label: 'Visa ****9876' },
    { id: 'radio-192', name: 'radio5', value: '2', label: 'VISA ****1234' },
    { id: 'radio-193', name: 'radio5', value: '3', label: 'ACH - Bank x1051' },
    { id: 'radio-194', name: 'radio5', value: '4', label: 'Other' },
];

// Modal input data

export const moalTextInput: TextInputProps[] = [
    {
        id: '239m',
        label: 'Street Address',
        name: 'street-address',
        placeholder: ' ',
        errorMessage: 'Please fill out this filed',
        required: true,
        className: 'wrap--text-input has-reset-button',
        classNameDiv: 'col',
    },
    {
        id: '240m',
        label: 'Apt',
        name: 'apt',
        placeholder: ' ',
        className: 'wrap--text-input',
        classNameDiv: 'col--sm-2',
    },
    {
        id: '241m',
        label: 'Zip Code',
        name: 'zip-code',
        required: true,
        errorMessage: 'Incorrect Zipcode',
        placeholder: ' ',
        pattern: '^[0-9]{5}(?:-[0-9]{4})?$',
        className: 'wrap--text-input',
        classNameDiv: 'col--sm-2',
    },
];
