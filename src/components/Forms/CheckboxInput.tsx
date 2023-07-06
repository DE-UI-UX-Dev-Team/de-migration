import React, { useEffect } from 'react';
import { CheckboxListProps, CheckboxProps } from '../../interfaces/Props';

const CheckboxInput: React.FC<CheckboxProps> = ({ id, name, value, label, className }) => {
    return (
        <>
            <label
                className={className}
                htmlFor={id}
            >
                <input
                    id={id}
                    type="checkbox"
                    name={name}
                    value={value}
                />
                <span>{label}</span>
            </label>
        </>
    );
};

const CheckboxList: React.FC<CheckboxListProps> = ({ checkboxes, className }) => {
    useEffect(() => {
        const checklistLabels = document.querySelectorAll('.nested-checklist');

        checklistLabels.forEach((checklist) => {
            const id = checklist.getAttribute('for');
            const subOptions = Array.from(document.querySelectorAll<HTMLInputElement>(`[for="${id}"] + ul > li input`));
            const parentOptionInput = document.querySelector<HTMLInputElement>(`[for="${id}"] input`);

            checklist.addEventListener('click', (e) => {
                if (e.target instanceof HTMLInputElement) {
                    const isChecked = e.target.checked;
                    subOptions.forEach((option) => {
                        option.checked = isChecked;
                    });
                }
            });

            subOptions.forEach((option) => {
                option.addEventListener('click', () => {
                    const subOptionsCount = subOptions.length;
                    const checkedOptionsCount = checkAllOptions(subOptions);

                    switch (checkedOptionsCount) {
                        case 0:
                            checklist.classList.remove('partial');
                            if (parentOptionInput) {
                                parentOptionInput.checked = false;
                            }
                            break;
                        case subOptionsCount:
                            checklist.classList.remove('partial');
                            if (parentOptionInput) {
                                parentOptionInput.checked = true;
                            }
                            break;
                        default:
                            checklist.classList.add('partial');
                            if (parentOptionInput) {
                                parentOptionInput.checked = true;
                            }
                            break;
                    }
                });
            });

            function checkAllOptions(subOptions: HTMLInputElement[]): number {
                let count = 0;

                for (let i = 0; i < subOptions.length; i++) {
                    if (subOptions[i].checked) {
                        count++;
                    }
                }

                return count;
            }
        });
    }, [className]);

    return (
        <ul className={className}>
            {checkboxes.map((checkbox) => (
                <li key={checkbox.id}>
                    <CheckboxInput {...checkbox} />
                    {checkbox.nestedCheckboxes && (
                        <ul>
                            {checkbox.nestedCheckboxes.map((nestedCheckbox) => (
                                <li key={nestedCheckbox.id}>
                                    <CheckboxInput {...nestedCheckbox} />
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default CheckboxList;
