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
                {/* <ExpandNavButton /> */}
                <section className="bg--primary-light-1 bg-btm-curv">
                    <div className="container">
                        <div className="row">
                            <div className="col--md-4">
                                <h1>Direct Energy Design System</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ab animi nobis
                                    sapiente, facilis pariatur, officiis quod sequi delectus rem neque qui cum porro
                                    omnis perferendis nisi nesciunt placeat. Sit?
                                </p>
                            </div>
                            <div className="col--md-4">
                                <img
                                    src="../../assets/images/hero-image.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row card-group">
                            <div className="col--lg-6 card-container">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>
                                            {' '}
                                            <i className="icon-md fak fa-circle-check-light"></i>Figma Guidelines
                                        </h4>
                                        <p>
                                            At Direct Energy, your needs are our top priority! Configuring your plan
                                            allows you to tailo your plan to your needs.
                                        </p>
                                        <a
                                            className="btn--tertiary icon-right"
                                            target="_blank"
                                            href="https://www.figma.com/proto/iycs77Ak1awlYSOlKHSjLZ/Direct-Energy---Design-System---Digital-3.0?node-id=6110-10217&scaling=min-zoom&page-id=521%3A34&starting-point-node-id=6110%3A10217&show-proto-sidebar=1"
                                        >
                                            <i className="fak fa-arrow-up-right-from-square-solid"></i>
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col--lg-6 card-container">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>
                                            {' '}
                                            <i className="icon-md fak fa-circle-check-light"></i>
                                            Storybook Components
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dignissimos
                                            repellendus ducimus mollitia ullam voluptatibus nostrum suscipit minus.
                                            Dolores modi consequuntur nihil, voluptas reiciendis distinctio obcaecati
                                            cum sunt quod ad.
                                        </p>
                                        <a
                                            className="btn--tertiary icon-right"
                                            target="_blank"
                                            href="/storybook/"
                                        >
                                            <i className="fak fa-arrow-up-right-from-square-solid"></i>
                                            Explore
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row card-group">
                            <div className="col--lg-6 card-container">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>
                                            {' '}
                                            <i className="icon-md fak fa-circle-check-light"></i>
                                            Design Tokens
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore
                                            et obcaecati nisi neque inventore, laborum odio ut autem error nihil dolores
                                            facilis eum temporibus, consequatur quas voluptate maiores perferendis.
                                        </p>
                                        <a
                                            className="btn--tertiary icon-right"
                                            href="/docs/design-tokens/"
                                        >
                                            <i className="fak fa-arrow-up-right-from-square-solid"></i>
                                            !Check This Out
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col--lg-6 card-container">
                                <div className="card">
                                    <div className="card-body">
                                        <h4>
                                            {' '}
                                            <i className="icon-md fak fa-circle-check-light"></i>CSS Framework
                                        </h4>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
                                            impedit tempora a deleniti nobis corporis temporibus sint veniam dolor
                                            aperiam! Ad vitae a itaque placeat aspernatur molestiae ipsam pariatur
                                            error!
                                        </p>
                                        <a
                                            className="btn--tertiary icon-right"
                                            href="/docs/css-framework/"
                                        >
                                            <i className="fak fa-arrow-up-right-from-square-solid"></i>
                                            Review Here
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </AppWrapper>
    </React.StrictMode>,
    document.getElementById('root')
);
