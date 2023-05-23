import React from 'react';
import ReactDOM from 'react-dom';
import SidebarNav from './docs/components/layout/nav/SidebarNav';
import ExpandNavButton from './docs/components/layout/nav/ExpandNavButton';
import AppWrapper from './docs/components/layout/AppWrapper';
import './docs/styles/doc-styles.scss';

ReactDOM.render(
    <React.StrictMode>
        <AppWrapper>
            <SidebarNav />
            <main>
                <ExpandNavButton />
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
