import ButtonItem from '../components/Buttons/ButtonItem';
import buttonData from '../config/buttonData';

export default {
    component: ButtonItem,
    tags: ['autodocs'],
};

export const defaultButtonItem = {
    args: {
        buttonType: buttonData[0].buttonType,
        buttonLabel: buttonData[0].buttonLabel,
        buttonIconLeft: buttonData[0].buttonIconLeft,
        buttonIconRight: buttonData[0].buttonIconRight,
    },
};
