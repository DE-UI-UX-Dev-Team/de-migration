import { ButtonImageGroup } from '../interfaces/Props';

const footerButtonsData: ButtonImageGroup = {
    buttonImageArray: [
        {
            href: 'https://www.example.com',
            title: 'Google Play Store',
            target: '_blank',
            className: 'store-button',
            imgSrc: '/assets/images/playstore-button.png',
            imgAlt: 'playstore-button',
        },
        {
            href: 'https://www.amazon.com/dp/B07CGFBR8W',
            title: 'Amazon Alexa',
            target: '_blank',
            className: 'store-button',
            imgSrc: '/assets/images/alexa-button.png',
            imgAlt: 'alexa-button',
        },
        {
            href: 'https://itunes.apple.com/us/app/direct-energy-account-manager/id699977445?mt=8',
            title: 'Apple iOS AppStore',
            target: '_blank',
            className: 'store-button',
            imgSrc: '/assets/images/appstore-button.png',
            imgAlt: 'appstore-button',
        },
    ],
};

export default footerButtonsData;
