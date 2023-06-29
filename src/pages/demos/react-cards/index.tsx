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
