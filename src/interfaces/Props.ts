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
