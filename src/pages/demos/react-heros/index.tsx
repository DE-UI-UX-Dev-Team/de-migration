import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Hero from '../../../components/Heros/Hero';

const App: React.FC = () => {
    return (
        <div>
            <Hero />
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
