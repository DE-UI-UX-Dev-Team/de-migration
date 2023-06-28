import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import CardGroup from '../../../components/Cards/CardGroup';
import {
    cards,
    cardsbody,
    cardsbodyright,
    cardsbtn,
    cardshorizontal,
    cardsleft,
    cardsright,
} from '../../../config/cardsData';

const App: React.FC = () => {
    return (
        <div>
            <section className="bdr-bottom">
                <div className="container">
                    <div className="row fs--text-center">
                        <div className="col">
                            <h2>Card group w/ Cards having both Image and Body</h2>
                        </div>
                    </div>
                    <CardGroup
                        cards={cards}
                        className="card-group"
                    />
                </div>
            </section>

            <section className="bdr-bottom">
                <div className="container">
                    <div className="row fs--text-center">
                        <div className="col">
                            <h2>Card group w/ Cards having only Body</h2>
                        </div>
                    </div>
                    <CardGroup
                        cards={cardsbody}
                        className="card-group"
                    />
                </div>
            </section>

            <section className="bdr-bottom">
                <div className="container">
                    <div className="row fs--text-center">
                        <div className="col">
                            <h2>Horizontal Cards</h2>
                        </div>
                    </div>
                    <CardGroup cards={cardshorizontal} />
                </div>
            </section>

            <section className="bdr-bottom">
                <div className="container card-container">
                    <div className="card-outer--horizontal">
                        <div className="card-outer--body">
                            <h2>Cards group inside Horizontal Card w/ Image on right</h2>
                            <p>
                                Whether you go from Free Weekends or Free Nights, with Direct Energy, there’s no worry
                                about wholesale power price swings.
                            </p>
                            <CardGroup
                                cards={cardsright}
                                className="card-group"
                            />
                        </div>
                        <div className="card-outer--img">
                            <img
                                src="/assets/images/card-placeholder-img.png"
                                alt="card-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bdr-bottom">
                <div className="container card-container">
                    <div className="card-outer--horizontal">
                        <div className="card-outer--body">
                            <h2>Cards group inside Horizontal Card w/ Image on right</h2>
                            <p>
                                Whether you go from Free Weekends or Free Nights, with Direct Energy, there’s no worry
                                about wholesale power price swings.
                            </p>
                            <CardGroup
                                cards={cardsbodyright}
                                className="card-group"
                            />
                        </div>
                        <div className="card-outer--img">
                            <img
                                src="/assets/images/card-placeholder-img.png"
                                alt="card-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bdr-bottom">
                <div className="container card-container">
                    <div className="card-outer--horizontal">
                        <div className="card-outer--img">
                            <img
                                src="/assets/images/card-placeholder-img.png"
                                alt="card-img"
                            />
                        </div>
                        <div className="card-outer--body">
                            <h2>Cards group inside Horizontal Card w/ Image on left</h2>
                            <p>
                                Whether you go from Free Weekends or Free Nights, with Direct Energy, there’s no worry
                                about wholesale power price swings.
                            </p>
                            <CardGroup
                                cards={cardsleft}
                                className="card-group"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row fs--text-center">
                        <div className="col">
                            <h2>Card group w/ Cards having both Image and Body w/ Orange Button</h2>
                        </div>
                    </div>
                    <CardGroup
                        cards={cardsbtn}
                        className="card-group"
                    />
                </div>
            </section>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

/*

import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import CardGroup from '../../../components/Cards/CardGroup';

const App: React.FC = () => {
    const cards = [
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs.',
            cardDivClassName: 'col--lg-3 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--tertiary',
        },
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description: 'At Direct Energy, your n',
            cardDivClassName: 'col--lg-3 card-container',
            cardClassName: 'card bg--tertiary-base',
            buttonClassName: 'btn--tertiary',
        },
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs.',
            cardDivClassName: 'col--lg-3 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--tertiary',
        },
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs. At Direct Energy, your needs are our top priority!',
            cardDivClassName: 'col--lg-3 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--tertiary',
        },
    ];

    const cardsbody = [
        {
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs.',
            cardDivClassName: 'col--lg-3 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--tertiary',
        },
        {
            alt: 'card-img',
            title: "What's in it for Me?",
            description: 'At Direct Energy, your n',
            cardDivClassName: 'col--lg-3 card-container',
            cardClassName: 'card bg--tertiary-base',
            buttonClassName: 'btn--tertiary',
        },
        {
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs.',
            cardDivClassName: 'col--lg-3 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--tertiary',
        },
        {
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs. At Direct Energy, your needs are our top priority!',
            cardDivClassName: 'col--lg-3 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--tertiary',
        },
    ];

    const cardshorizontal = [
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs.',
            cardDivClassName: 'col--lg-6 card-container',
            cardClassName: 'card--horizontal',
            buttonClassName: 'btn--tertiary',
        },
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description: 'At Direct Energy, your n',
            cardDivClassName: 'col--lg-6 card-container',
            cardClassName: 'card--horizontal',
            buttonClassName: 'btn--tertiary',
        },
    ];

    const cardsright = [
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description: 'At Direct Energy, your n',
            cardDivClassName: 'col--lg-4 card-container',
            cardClassName: 'card bg--tertiary-base',
            buttonClassName: 'btn--tertiary',
        },
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs.',
            cardDivClassName: 'col--lg-4 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--tertiary',
        },
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs. At Direct Energy, your needs are our top priority!',
            cardDivClassName: 'col--lg-4 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--tertiary',
        },
    ];

    const cardsbodyright = [
        {
            alt: 'card-img',
            title: "What's in it for Me?",
            description: 'At Direct Energy, your n',
            cardDivClassName: 'col--lg-4 card-container',
            cardClassName: 'card bg--tertiary-light-3',
            buttonClassName: 'btn--tertiary',
        },
        {
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs.',
            cardDivClassName: 'col--lg-4 card-container',
            cardClassName: 'card bg--tertiary-light-3',
            buttonClassName: 'btn--tertiary',
        },
        {
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs. At Direct Energy, your needs are our top priority!',
            cardDivClassName: 'col--lg-4 card-container',
            cardClassName: 'card bg--tertiary-light-3',
            buttonClassName: 'btn--tertiary',
        },
    ];

    const cardsleft = [
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description: 'At Direct Energy, your n',
            cardDivClassName: 'col--md-odd-3 col--lg-4 card-container',
            cardClassName: 'card bg--tertiary-base',
            buttonClassName: 'btn--tertiary',
        },
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs.',
            cardDivClassName: 'col--md-odd-3 col--lg-4 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--tertiary',
        },
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs. At Direct Energy, your needs are our top priority!',
            cardDivClassName: 'col--md-odd-3 col--lg-4 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--tertiary',
        },
    ];

    const cardsbtn = [
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs.',
            cardDivClassName: 'col--lg-3 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--primary',
        },
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description: 'At Direct Energy, your n',
            cardDivClassName: 'col--lg-3 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--primary',
        },
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs.',
            cardDivClassName: 'col--lg-3 card-container',
            cardClassName: 'card',
            buttonClassName: 'btn--primary',
        },
        {
            imgSrc: '/assets/images/card-img.jpg',
            alt: 'card-img',
            title: "What's in it for Me?",
            description:
                'At Direct Energy, your needs are our top priority! Configuring your plan allows you to tailor your plan to your needs. At Direct Energy, your needs are our top priority!',
            cardDivClassName: 'col--lg-3 card-container',
            cardClassName: 'card bg--tertiary-base',
            buttonClassName: 'btn--primary',
        },
    ];

    return (
        <div>
            <section className="bdr-bottom">
                <div className="container">
                    <div className="row fs--text-center">
                        <div className="col">
                            <h2>Card group w/ Cards having both Image and Body</h2>
                        </div>
                    </div>
                    <CardGroup
                        cards={cards}
                        className="card-group"
                    />
                </div>
            </section>

            <section className="bdr-bottom">
                <div className="container">
                    <div className="row fs--text-center">
                        <div className="col">
                            <h2>Card group w/ Cards having only Body</h2>
                        </div>
                    </div>
                    <CardGroup
                        cards={cardsbody}
                        className="card-group"
                    />
                </div>
            </section>

            <section className="bdr-bottom">
                <div className="container">
                    <div className="row fs--text-center">
                        <div className="col">
                            <h2>Horizontal Cards</h2>
                        </div>
                    </div>
                    <CardGroup cards={cardshorizontal} />
                </div>
            </section>

            <section className="bdr-bottom">
                <div className="container card-container">
                    <div className="card-outer--horizontal">
                        <div className="card-outer--body">
                            <h2>Cards group inside Horizontal Card w/ Image on right</h2>
                            <p>
                                Whether you go from Free Weekends or Free Nights, with Direct Energy, there’s no worry
                                about wholesale power price swings.
                            </p>
                            <CardGroup
                                cards={cardsright}
                                className="card-group"
                            />
                        </div>
                        <div className="card-outer--img">
                            <img
                                src="/assets/images/card-placeholder-img.png"
                                alt="card-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bdr-bottom">
                <div className="container card-container">
                    <div className="card-outer--horizontal">
                        <div className="card-outer--body">
                            <h2>Cards group inside Horizontal Card w/ Image on right</h2>
                            <p>
                                Whether you go from Free Weekends or Free Nights, with Direct Energy, there’s no worry
                                about wholesale power price swings.
                            </p>
                            <CardGroup
                                cards={cardsbodyright}
                                className="card-group"
                            />
                        </div>
                        <div className="card-outer--img">
                            <img
                                src="/assets/images/card-placeholder-img.png"
                                alt="card-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bdr-bottom">
                <div className="container card-container">
                    <div className="card-outer--horizontal">
                        <div className="card-outer--img">
                            <img
                                src="/assets/images/card-placeholder-img.png"
                                alt="card-img"
                            />
                        </div>
                        <div className="card-outer--body">
                            <h2>Cards group inside Horizontal Card w/ Image on left</h2>
                            <p>
                                Whether you go from Free Weekends or Free Nights, with Direct Energy, there’s no worry
                                about wholesale power price swings.
                            </p>
                            <CardGroup
                                cards={cardsleft}
                                className="card-group"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row fs--text-center">
                        <div className="col">
                            <h2>Card group w/ Cards having both Image and Body w/ Orange Button</h2>
                        </div>
                    </div>
                    <CardGroup
                        cards={cardsbtn}
                        className="card-group"
                    />
                </div>
            </section>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

*/
