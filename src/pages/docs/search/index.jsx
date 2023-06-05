import React from 'react';
import ReactDOM from 'react-dom';
import designSystemMeta from '../data/design-system-meta-doc.json';

import Search from '../components/DocumentSearch/Search';
import SidebarNav from '../components/layout/nav/SidebarNav';
import ExpandNavButton from '../components/layout/nav/ExpandNavButton';
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
                                <h1>Search Results</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <Search />
            </main>
        </AppWrapper>
    </React.StrictMode>,
    document.getElementById('root')
);
