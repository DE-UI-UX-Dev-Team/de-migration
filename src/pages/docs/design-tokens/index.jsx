import React from 'react';
import ReactDOM from 'react-dom';
import designSystemMeta from '../data/design-system-meta-doc.json';
import DesignTokenDoc from '../components/DesignTokenDocComponent/DesignTokenDoc';
import SidebarNav from '../components/layout/nav/SidebarNav';
import ExpandNavButton from '../components/layout/nav/ExpandNavButton';
import AppWrapper from '../components/layout/AppWrapper';
import ColorGrid from './ColorGrid';
import '../styles/doc-styles.scss';

ReactDOM.render(
    <React.StrictMode>
        <AppWrapper>
            <SidebarNav />
            <main>
                <ExpandNavButton />
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Design Tokens</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h2>Page/Container Fill Color List</h2>
                                <ColorGrid />
                            </div>
                        </div>
                    </div>
                </section>
                <DesignTokenDoc
                    docType={'design-tokens'}
                    docMeta={designSystemMeta}
                />
            </main>
        </AppWrapper>
    </React.StrictMode>,
    document.getElementById('root')
);
