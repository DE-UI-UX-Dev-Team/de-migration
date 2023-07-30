import { DropdownOption } from '../interfaces/Props';
import { labelLong, labelShort } from '../local/en/dropdowns/constants';

export const optionsLong: DropdownOption[] = [
    { value: 'option1', label: `${labelLong.longTextLabel}` },
    { value: 'option2', label: `${labelLong.option2}` },
    { value: 'option3', label: `${labelLong.option3}` },
    { value: 'option4', label: `${labelLong.option4}` },
    { value: 'option5', label: `${labelLong.option5}` },
    { value: 'option6', label: `${labelLong.option6}` },
    { value: 'option7', label: `${labelLong.option7}` },
];

export const optionsShort: DropdownOption[] = [
    { value: 'option1', label: `${labelShort.option1}` },
    { value: 'option2', label: `${labelShort.option2}` },
    { value: 'option3', label: `${labelShort.option3}` },
];
