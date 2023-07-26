import React, { ReactNode } from 'react';

export interface ToggleSwitchProps {
    disabled: boolean;
    checked: boolean;
    toggleLabel: string;
}

export interface ContentSwitcherProps {
    contentSwitcherObject: {
        hiddenInput: {
            inputId: string;
            inputName: string;
            inputAttribute: string;
            inputType: string;
            inputChecked: boolean;
        };

        SliderLabel: {
            labelAttribute: string;
            labelHead: string;
            labelSubhead: string;
            forText: string;
        };

        SwitcherContent: {
            contentAttribute: string;
            contentHeading: string;
            contentPara: string;
        };
    };
}

export interface ButtonProps {
    buttonType: string;
    buttonLabel: string;
    buttonIconLeft: string;
    buttonIconRight: string;
}

export interface InputButtonProps {
    inputButtonType: string;
    inputButtonValue: string;
    inputButtonIconLeft: string;
    inputButtonIconRight: string;
}

export interface AccordionProps {
    accordionTitle: React.ReactNode | string;
    accordionContent: React.ReactNode;
}

export interface CardProps {
    imgSrc?: string;
    alt?: string;
    title: string;
    description: string;
    buttonClassName?: string;
    cardDivClassName: string;
    cardClassName: string;
}

// Forms
export interface TextInputProps {
    id?: string;
    label: string;
    name: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    reset?: boolean;
    placeholder?: string;
    pattern?: string;
    errorMessage?: string;
    showIcon?: boolean;
    showResetButton?: boolean;
    classNameDiv: string;
    className: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioInputProps {
    id: string;
    name: string;
    value: string;
    label: string;
    reset?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioInputGroupProps {
    className: string;
    radioData: RadioInputProps[];
    reset?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxProps {
    id: string;
    name: string;
    value: string;
    label: string;
    className?: string;
    checked?: boolean;
    reset?: boolean;
    nestedCheckboxes?: CheckboxProps[];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxListProps {
    checkboxes: CheckboxProps[];
    classNameDiv: string;
    reset?: boolean;
    checkedMap?: Record<string, boolean>;
    updateCheckedMap?: (newCheckedMap: Record<string, boolean>) => void;
}

export interface FormbtnProps {
    type: string;
    value: string;
    classNameLabel?: string;
    classNameInput?: string;
}

// Modals
export interface ModalProps {
    children: ReactNode;
    header?: string;
    containerClassName?: string;
    columnClassName?: string;
    btnPrimary?: string;
    btnSecondary?: string;
    btnCloseSecondary?: string;
    iconClassName?: string;
    withExclamationIcon?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    isDisabled?: boolean;
    shouldCloseModal?: boolean;
}
export interface ToggleSwitchProps {
    disabled: boolean;
    checked: boolean;
    toggleLabel: string;
}

export interface ContentSwitcherProps {
    contentSwitcherObject: {
        hiddenInput: {
            inputId: string;
            inputName: string;
            inputAttribute: string;
            inputType: string;
            inputChecked: boolean;
        };

        SliderLabel: {
            labelAttribute: string;
            labelHead: string;
            labelSubhead: string;
            forText: string;
        };

        SwitcherContent: {
            contentAttribute: string;
            contentHeading: string;
            contentPara: string;
        };
    };
}

export interface ButtonProps {
    buttonType: string;
    buttonLabel: string;
    buttonIconLeft: string;
    buttonIconRight: string;
}

export interface InputButtonProps {
    inputButtonType: string;
    inputButtonValue: string;
    inputButtonIconLeft: string;
    inputButtonIconRight: string;
}

export interface AccordionProps {
    accordionTitle: React.ReactNode | string;
    accordionContent: React.ReactNode;
}

export interface CardProps {
    imgSrc?: string;
    alt?: string;
    title: string;
    description: string;
    buttonClassName?: string;
    cardDivClassName: string;
    cardClassName: string;
}

// Forms
export interface TextInputProps {
    id?: string;
    label: string;
    name: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    pattern?: string;
    errorMessage?: string;
    showIcon?: boolean;
    showResetButton?: boolean;
    classNameDiv: string;
    className: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioInputProps {
    id: string;
    name: string;
    value: string;
    label: string;
}

export interface RadioInputGroupProps {
    className: string;
    radioData: RadioInputProps[];
}

export interface CheckboxProps {
    id: string;
    name: string;
    value: string;
    label: string;
    className?: string;
    checked?: boolean;
    nestedCheckboxes?: CheckboxProps[];
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxListProps {
    checkboxes: CheckboxProps[];
    classNameDiv: string;
}

export interface FormbtnProps {
    type: string;
    value: string;
    classNameLabel?: string;
    classNameInput?: string;
}

export interface TabProps<tabContentType> {
    tabIcon: string;
    tabTitle?: React.ReactNode | string;
    tabContent?: tabContentType;
}

export interface ImageContentProps {
    imgSrc?: string;
    imgDesc?: string;
    contentHeading?: string;
    contentSubHeading?: string;
    contentPara?: string;
}
export interface TabImageContentProps {
    tabContent: ImageContentProps[];
}

export interface TabColumnProps {
    imgSrc?: string;
    imgDesc?: string;
    contentHeading?: string;
    phone?: string;
    phoneRef?: string;
}
export interface Tab4ColumnProps {
    tabContent: TabColumnProps[];
}
export interface ParaProps {
    text: string;
}
export interface ParaGroupProps {
    tabContent: ParaProps[];
}
