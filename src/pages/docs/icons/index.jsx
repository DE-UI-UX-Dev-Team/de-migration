import React from 'react';
import ReactDOM from 'react-dom';
import SidebarNav from '../components/layout/nav/SidebarNav';
import ExpandNavButton from '../components/layout/nav/ExpandNavButton';
import IconCards from '../components/Icons/IconCards';
import AppWrapper from '../components/layout/AppWrapper';
import '../styles/doc-styles.scss';

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
                                <h1>Font Awesome Icons</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <IconCards />
            </main>
        </AppWrapper>
    </React.StrictMode>,
    document.getElementById('root')
);
