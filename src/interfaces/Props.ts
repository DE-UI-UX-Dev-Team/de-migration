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

//Tabs
export interface TabProps<T> {
    tabIcon?: string;
    tabTitle?: string;
    tabContent: T | T[];
}

export interface TabsGroupProps<T> {
    tabs: TabProps<T>[]; // Make the interface generic and use the type argument T
    tabContent: React.FC<T>; // Pass the component as a prop
}

export interface TabIndicatorsProps {
    showLeft: boolean;
    showRight: boolean;
    onScrollTabs: (left: boolean) => void;
}

export interface ImageContentProps {
    colReverse?: boolean;
    imgSrc?: string;
    imgDesc?: string;
    contentHeading?: string;
    contentSubHeading?: string;
    content?: string;
}

export interface ColContentProps {
    colClass?: string;
    imgSrc?: string;
    imgDesc?: string;
    contentHeading?: string;
    content?: string;
    phone?: string;
    phoneRef?: string;
}

export interface ColContentGroupProps {
    tabContent: ColContentProps[];
}

export interface SampleTextProps {
    text: string;
}

// Tables
export interface TableProps {
    children: ReactNode;
    title: string;
    tableClassName?: string;
    tbodyClassName?: string;
}

export interface TableRowProps {
    children: ReactNode;
    trClassName?: string;
}

export interface TableCellProps {
    tdTitle: string;
    icon?: string;
}

//Link Lists
export interface LinkProps {
    class?: string;
    iconClass?: string;
    href?: string;
    name?: string;
}
export interface LinkListProps {
    containerClass?: string;
    linkListHead?: string;
    li: LinkProps[];
}

export interface LinkListBasicProps {
    linkListHead?: string;
    li: LinkProps[];
}

export interface LinkListGroupProps {
    containerClass?: string;
    linkListGroup: LinkListBasicProps[] | LinkListBasicProps;
}

export interface FooterProps {
    footerSectionClass?: string;
    linkListArray: LinkListGroupProps[];
    disclaimer?: string;
}
export interface ButtonImageProps {
    href?: string;
    title?: string;
    target?: string;
    className?: string;
    imgSrc?: string;
    imgAlt?: string;
}
export interface ButtonImageGroup {
    buttonImageArray: ButtonImageProps[];
}

//  Image props
export interface ImageProps {
    src: string;
    alt: string;
    srcSet?: string;
    sizes?: string;
    width?: string;
    height?: string;
    className?: string;
    align?: string;
    border?: string;
    borderRadius?: string;
    onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}
