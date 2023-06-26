import React from 'react';
import ButtonItem from '../components/Buttons/ButtonItem';
import InputButtonItem from '../components/Buttons/InputButtonItem';
import buttonData from '../config/buttonData';
import inputButtonData from '../config/inputButtonData';
//import '../../node_modules/@fortawesome/fontawesome-pro/css/all.css';

const buttonTypes = Array.from(new Set(buttonData.map((item) => item.buttonType)));
const inputButtonTypes = Array.from(new Set(inputButtonData.map((item) => item.inputButtonType)));
const buttonIcons = [
    '',
    ...Array.from(new Set(buttonData.flatMap((item) => [item.buttonIconLeft, item.buttonIconRight]))),
    ...Array.from(new Set(inputButtonData.flatMap((item) => [item.inputButtonIconLeft, item.inputButtonIconRight]))),
];

export default {
    title: 'DE/Button',
    component: 'Buttons',
    parameters: {
        componentSubtitle: 'Button components',
    },
    argTypes: {
        buttonType: {
            options: buttonTypes,
            control: { type: 'select' },
        },

        inputButtonType: {
            options: inputButtonTypes,
            control: { type: 'select' },
        },

        buttonIconLeft: {
            options: buttonIcons,
            control: { type: 'select' },
            if: { arg: 'buttonIconRight', eq: '' },
        },
        buttonIconRight: {
            options: buttonIcons,
            control: { type: 'select' },
            if: { arg: 'buttonIconLeft', eq: '' },
        },

        inputButtonIconLeft: {
            options: buttonIcons,
            control: { type: 'select' },
            if: { arg: 'inputButtonIconRight', eq: '' },
        },

        inputButtonIconRight: {
            options: buttonIcons,
            control: { type: 'select' },
            if: { arg: 'inputButtonIconLeft', eq: '' },
        },
    },
};

export const InputButtonStory = (args: any) => <InputButtonItem {...args} />;
InputButtonStory.args = {
    inputButtonType: inputButtonData[0].inputButtonType,
    inputButtonValue: inputButtonData[0].inputButtonValue,
    inputButtonIconLeft: inputButtonData[0].inputButtonIconLeft,
    inputButtonIconRight: inputButtonData[0].inputButtonIconRight,
};

export const ButtonStory = (args: any) => <ButtonItem {...args} />;
ButtonStory.args = {
    buttonType: buttonData[0].buttonType,
    buttonLabel: buttonData[0].buttonLabel,
    buttonIconLeft: buttonData[0].buttonIconLeft,
    buttonIconRight: buttonData[0].buttonIconRight,
};

ButtonStory.storyName = 'ButtonItem';
InputButtonStory.storyName = 'InputButtonItem';

InputButtonStory.argTypes = {
    buttonType: { table: { disable: true } },
    buttonIconLeft: { table: { disable: true } },
    buttonIconRight: { table: { disable: true } },
};

ButtonStory.argTypes = {
    inputButtonType: { table: { disable: true } },
    inputButtonIconLeft: { table: { disable: true } },
    inputButtonIconRight: { table: { disable: true } },
};
