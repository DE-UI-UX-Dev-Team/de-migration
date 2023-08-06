import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Hero from '../../../components/Heros/Hero';
import HeroStyleTwo from '../../../components/Heros/HeroStyleTwo';

const App: React.FC = () => {
    return (
        <div>
            <section className="hero-section">
                <Hero />
            </section>
            <section className="fs--text-center hero-option">
                <h2>Hero Option One & Two</h2>
            </section>
            <section className="hero-section">
                <HeroStyleTwo />
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
