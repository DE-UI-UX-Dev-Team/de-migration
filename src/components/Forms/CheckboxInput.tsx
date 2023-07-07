import React, { useEffect, useState } from 'react';
import { CheckboxListProps, CheckboxProps } from '../../interfaces/Props';

const CheckboxList: React.FC<CheckboxListProps> = ({ checkboxes, classNameDiv }) => {
    const [checkedMap, setCheckedMap] = useState<Record<string, boolean>>({});

    useEffect(() => {
        const initialCheckedMap: Record<string, boolean> = {};

        checkboxes.forEach((checkbox) => {
            initialCheckedMap[checkbox.id] = checkbox.checked || false;

            if (checkbox.nestedCheckboxes) {
                checkbox.nestedCheckboxes.forEach((nestedCheckbox) => {
                    initialCheckedMap[nestedCheckbox.id] = nestedCheckbox.checked || false;
                });
            }
        });

        setCheckedMap(initialCheckedMap);
    }, [checkboxes]);

    const handleNestedCheckboxChange = (
        id: string,
        nestedCheckboxes: CheckboxProps[] | undefined,
        checked: boolean
    ) => {
        if (!nestedCheckboxes) return;

        const updatedCheckedMap = { ...checkedMap, [id]: checked };

        nestedCheckboxes.forEach((nestedCheckbox) => {
            updatedCheckedMap[nestedCheckbox.id] = checked;
        });

        setCheckedMap(updatedCheckedMap);
    };

    const isCheckboxChecked = (id: string) => checkedMap[id] || false;

    const handleCheckboxChange = (id: string, checked: boolean) => {
        const updatedCheckedMap = { ...checkedMap, [id]: checked };
        setCheckedMap(updatedCheckedMap);

        const parentCheckbox = checkboxes.find((checkbox) =>
            checkbox.nestedCheckboxes?.some((nestedCheckbox) => nestedCheckbox.id === id)
        );

        if (parentCheckbox) {
            const anyNestedChecked = parentCheckbox.nestedCheckboxes?.some(
                (nestedCheckbox) => updatedCheckedMap[nestedCheckbox.id]
            );
            if (anyNestedChecked !== undefined) {
                const updatedParentCheckedMap = { ...updatedCheckedMap, [parentCheckbox.id]: anyNestedChecked };
                setCheckedMap(updatedParentCheckedMap);
            }
        }
    };

    const isCheckboxPartial = (nestedCheckboxes: CheckboxProps[] | undefined) => {
        if (!nestedCheckboxes) return false;

        const checkedCount = nestedCheckboxes.filter((checkbox) => isCheckboxChecked(checkbox.id)).length;
        return checkedCount > 0 && checkedCount < nestedCheckboxes.length;
    };

    return (
        <ul className={classNameDiv}>
            {checkboxes.map((checkbox) => (
                <li key={checkbox.id}>
                    <label
                        htmlFor={checkbox.id}
                        className={`${checkbox.className} ${
                            isCheckboxPartial(checkbox.nestedCheckboxes) ? ' partial' : ''
                        }`}
                    >
                        <input
                            id={checkbox.id}
                            name={checkbox.name}
                            value={checkbox.value}
                            type="checkbox"
                            checked={checkbox.nestedCheckboxes ? isCheckboxChecked(checkbox.id) : undefined}
                            defaultChecked={!checkbox.nestedCheckboxes ? isCheckboxChecked(checkbox.id) : undefined}
                            onChange={(e) =>
                                handleNestedCheckboxChange(checkbox.id, checkbox.nestedCheckboxes, e.target.checked)
                            }
                        />
                        <span>{checkbox.label}</span>
                    </label>

                    {checkbox.nestedCheckboxes && (
                        <ul>
                            {checkbox.nestedCheckboxes.map((nestedCheckbox) => (
                                <li key={nestedCheckbox.id}>
                                    <label
                                        className={nestedCheckbox.className}
                                        htmlFor={nestedCheckbox.id}
                                    >
                                        <input
                                            id={nestedCheckbox.id}
                                            name={nestedCheckbox.name}
                                            value={nestedCheckbox.value}
                                            type="checkbox"
                                            checked={isCheckboxChecked(nestedCheckbox.id)}
                                            onChange={(e) => handleCheckboxChange(nestedCheckbox.id, e.target.checked)}
                                        />
                                        <span> {nestedCheckbox.label}</span>
                                    </label>
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
