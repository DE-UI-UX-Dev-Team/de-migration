import React from 'react';
import ReactDOM from 'react-dom';
import designSystemMeta from '../data/design-system-meta-doc.json';
import DocumentationComponent from '../components/DocumentationComponent/DocumentationComponent';
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
                                <h1>CSS Framework</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <DocumentationComponent
                    docType={'css-framework'}
                    docMeta={designSystemMeta}
                />
            </main>
        </AppWrapper>
    </React.StrictMode>,
    document.getElementById('root')
);
