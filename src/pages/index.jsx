import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/main.scss';
import './docs/styles/doc-styles.scss';
import AppWrapper from './docs/components/layout/AppWrapper';

ReactDOM.render(
    <React.StrictMode>
        <AppWrapper>
            <aside id="sidebar">
                <nav></nav>
            </aside>
            <main>
                <section className="bg--secondary-light-2">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Direct Energy Design System</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </AppWrapper>
    </React.StrictMode>,
    document.getElementById('root')
);
