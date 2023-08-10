import { RadioInputProps, TextInputProps } from '../interfaces/Props';
import { modalInfo } from '../local/en/modals/constants';

// Initial Modal
export const initialModals = [
    { name: `${modalInfo.names.basic}`, isActive: false },
    { name: `${modalInfo.names.payment}`, isActive: false },
    { name: `${modalInfo.names.form}`, isActive: false },
    { name: `${modalInfo.names.location}`, isActive: false },
    { name: `${modalInfo.names.noService}`, isActive: false },
    { name: `${modalInfo.names.autoPay}`, isActive: false },
];

// Modal Radio Data
export const radioServiceLocation: RadioInputProps[] = [
    { id: 'radio-91', name: 'radio5', value: '1', label: `${modalInfo.radioLabels.locationOne}` },
    { id: 'radio-92', name: 'radio5', value: '2', label: `${modalInfo.radioLabels.locationTwo}` },
    { id: 'radio-93', name: 'radio5', value: '3', label: `${modalInfo.radioLabels.locationThree}` },
    { id: 'radio-94', name: 'radio5', value: '4', label: `${modalInfo.radioLabels.locationFour}` },
];

export const radioPaymentMethod: RadioInputProps[] = [
    { id: 'radio-191', name: 'radio5', value: '1', label: `${modalInfo.radioLabels.paymentOne}` },
    { id: 'radio-192', name: 'radio5', value: '2', label: `${modalInfo.radioLabels.paymentTwo}` },
    { id: 'radio-193', name: 'radio5', value: '3', label: `${modalInfo.radioLabels.paymentThree}` },
    { id: 'radio-194', name: 'radio5', value: '4', label: `${modalInfo.radioLabels.paymentFour}` },
];

// Modal input data

export const moalTextInput: TextInputProps[] = [
    {
        id: '239m',
        label: `${modalInfo.inputLabels.address}`,
        name: 'street-address',
        placeholder: ' ',
        errorMessage: `${modalInfo.errorMessage.required}`,
        required: true,
        className: 'wrap--text-input has-reset-button',
        classNameDiv: 'col',
    },
    {
        id: '240m',
        label: `${modalInfo.inputLabels.apt}`,
        name: 'apt',
        placeholder: ' ',
        className: 'wrap--text-input',
        classNameDiv: 'col--sm-2',
    },
    {
        id: '241m',
        label: `${modalInfo.inputLabels.zipcode}`,
        name: 'zip-code',
        required: true,
        errorMessage: `${modalInfo.errorMessage.invalid}`,
        placeholder: ' ',
        pattern: '^[0-9]{5}(?:-[0-9]{4})?$',
        className: 'wrap--text-input',
        classNameDiv: 'col--sm-2',
    },
];
