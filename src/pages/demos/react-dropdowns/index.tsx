import React from 'react';
import ReactDOM from 'react-dom';
import { DropdownGroup } from '../../../components/Dropdowns/DropdownGroup';

const App: React.FC = () => {
    return (
        <>
            <section>
                <h2 className="fs--text-center ">1. Dropdowns - BG Light</h2>
                <DropdownGroup />
            </section>
            <section className="bg--tertiary-base">
                <h2 className="fs--text-center">2. Dropdowns - BG Dark</h2>
                <DropdownGroup />
            </section>
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
