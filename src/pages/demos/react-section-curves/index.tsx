import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { SectionCurve } from '../../../components/SectionCurves/SectionCurve';
import { CustomerCareData, links, sectionCurveData } from '../../../config/sectionCurveData';
import { CustomerCare } from '../../../components/SectionCurves/CustomerCare';
import { LinksList } from '../../../components/SectionCurves/LinkList';

const App: React.FC = () => {
    return (
        <>
            {sectionCurveData.map((data, index) => (
                <SectionCurve
                    key={index}
                    {...data}
                />
            ))}

            <section className="bg--tertiary-base--grad-1 bg-btm-curv bg-curv--tertiary-dark-1">
                <div className="container">
                    <h2>Customer Care Section</h2>
                    <h3>
                        Tertiary Base Background Gradient
                        <br /> Blending into the Footer
                    </h3>
                    <div className="row fs--text-center">
                        {CustomerCareData.map((data, index) => (
                            <CustomerCare
                                key={index}
                                {...data}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg--tertiary-dark-2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>
                                Primary Dark Background w/
                                <br />
                                Top Curve - Reverse
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <LinksList links={links} />
                        <LinksList links={links} />
                        <LinksList links={links} />
                    </div>
                </div>
            </section>

            <section className="bg--primary-dark-1--grad-1 bg-btm-curv bg-curv--primary-dark-1">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>
                                Primary Base Background Gradient
                                <br />
                                Blending into the Footer
                            </h2>
                        </div>
                    </div>
                    <div className="row fs--text-center">
                        {CustomerCareData.map((data, index) => (
                            <CustomerCare
                                key={index}
                                {...data}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg--primary-dark-2">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>
                                Secondary Dark Background w/
                                <br />
                                Top Curve - Reverse
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <LinksList links={links} />
                        <LinksList links={links} />
                        <LinksList links={links} />
                    </div>
                </div>
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
