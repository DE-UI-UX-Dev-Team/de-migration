import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { mainTitle } from '../../../local/en/dropdowns/constants';
import { DropdownGroup } from '../../../components/Dropdowns/DropdownGroup';

const App: React.FC = () => {
    return (
        <>
            <section>
                <h2 className="fs--text-center">{mainTitle.titleLight}</h2>
                <DropdownGroup />
            </section>

            <section className="bg--tertiary-base">
                <h2 className="fs--text-center">{mainTitle.titleDark}</h2>
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
