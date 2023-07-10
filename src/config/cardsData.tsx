import { CardProps } from '../interfaces/Props';

const imgSrc = '/assets/images/card-img.jpg';
const alt = 'card-img';
const title = "What's in it for Me?";
const descriptionShort = 'At Direct Energy, your n';
const descriptionMedium =
    'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs.';
const descriptionLong =
    'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs. At Direct Energy, your needs are our top priority!';

export const cards: CardProps[] = [
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionMedium}`,
        cardDivClassName: 'col--lg-3 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--tertiary',
    },
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionShort}`,
        cardDivClassName: 'col--lg-3 card-container',
        cardClassName: 'card bg--tertiary-base',
        buttonClassName: 'btn--tertiary',
    },
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionMedium}`,
        cardDivClassName: 'col--lg-3 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--tertiary',
    },
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionLong}`,
        cardDivClassName: 'col--lg-3 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--tertiary',
    },
];

export const cardsbody: CardProps[] = [
    {
        alt,
        title,
        description: `${descriptionMedium}`,
        cardDivClassName: 'col--lg-3 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--tertiary',
    },
    {
        alt,
        title,
        description: `${descriptionShort}`,
        cardDivClassName: 'col--lg-3 card-container',
        cardClassName: 'card bg--tertiary-base',
        buttonClassName: 'btn--tertiary',
    },
    {
        alt,
        title,
        description: `${descriptionMedium}`,
        cardDivClassName: 'col--lg-3 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--tertiary',
    },
    {
        alt,
        title,
        description: `${descriptionLong}`,
        cardDivClassName: 'col--lg-3 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--tertiary',
    },
];

export const cardshorizontal: CardProps[] = [
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionMedium}`,
        cardDivClassName: 'col--lg-6 card-container',
        cardClassName: 'card--horizontal',
        buttonClassName: 'btn--tertiary',
    },
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionShort}`,
        cardDivClassName: 'col--lg-6 card-container',
        cardClassName: 'card--horizontal',
        buttonClassName: 'btn--tertiary',
    },
];

export const cardsright: CardProps[] = [
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionShort}`,
        cardDivClassName: 'col--lg-4 card-container',
        cardClassName: 'card bg--tertiary-base',
        buttonClassName: 'btn--tertiary',
    },
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionMedium}`,
        cardDivClassName: 'col--lg-4 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--tertiary',
    },
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionLong}`,
        cardDivClassName: 'col--lg-4 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--tertiary',
    },
];

export const cardsbodyright: CardProps[] = [
    {
        alt,
        title,
        description: `${descriptionShort}`,
        cardDivClassName: 'col--lg-4 card-container',
        cardClassName: 'card ',
        buttonClassName: 'btn--tertiary',
    },
    {
        alt,
        title,
        description: `${descriptionMedium}`,
        cardDivClassName: 'col--lg-4 card-container',
        cardClassName: 'card ',
        buttonClassName: 'btn--tertiary',
    },
    {
        alt,
        title,
        description: `${descriptionLong}`,
        cardDivClassName: 'col--lg-4 card-container',
        cardClassName: 'card ',
        buttonClassName: 'btn--tertiary',
    },
];

export const cardsleft: CardProps[] = [
    {
        imgSrc,
        alt,
        title,
        description: 'At Direct Energy, your n',
        cardDivClassName: 'col--md-odd-3 col--lg-4 card-container',
        cardClassName: 'card bg--tertiary-base',
        buttonClassName: 'btn--tertiary',
    },
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionMedium}`,
        cardDivClassName: 'col--md-odd-3 col--lg-4 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--tertiary',
    },
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionLong}`,
        cardDivClassName: 'col--md-odd-3 col--lg-4 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--tertiary',
    },
];

export const cardsbtn: CardProps[] = [
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionMedium}`,
        cardDivClassName: 'col--lg-3 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--primary',
    },
    {
        imgSrc,
        alt,
        title,
        description: 'At Direct Energy, your n',
        cardDivClassName: 'col--lg-3 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--primary',
    },
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionMedium}`,
        cardDivClassName: 'col--lg-3 card-container',
        cardClassName: 'card',
        buttonClassName: 'btn--primary',
    },
    {
        imgSrc,
        alt,
        title,
        description: `${descriptionLong}`,
        cardDivClassName: 'col--lg-3 card-container',
        cardClassName: 'card bg--tertiary-base',
        buttonClassName: 'btn--primary',
    },
];
