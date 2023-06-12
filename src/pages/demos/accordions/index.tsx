import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import accordionData from '../../../config/accordionData';
import accordionTCData from '../../../config/accordionT&CData';
import accordionMarketingData from '../../../config/accordionMarketingData';
import AppWrapper from '../../docs/components/layout/AppWrapper';
import Accordion from '../../../components/Accordions/Accordion';
import AccordionGroup from '../../../components/Accordions/AccordionGroup';

const App: React.FC = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row accordion--faq accordion--border-btm">
                        <div className="col fs--text-center">
                            <h2>1. FAQ Accordion - Bottom Border</h2>
                        </div>
                        <div className="col">
                            <AppWrapper>
                                <AccordionGroup accordions={accordionData} />
                            </AppWrapper>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row accordion--faq accordion--border-full">
                        <div className="col fs--text-center">
                            <h2>2. FAQ Accordion - Full Border</h2>
                        </div>
                        <div className="col">
                            <AppWrapper>
                                <AccordionGroup accordions={accordionData} />
                            </AppWrapper>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--tertiary-base">
                <div className="container">
                    <div className="row accordion--faq accordion--border-full">
                        <div className="col fs--text-center">
                            <h2>3. FAQ Accordion - Dark; Full Border</h2>
                        </div>
                        <div className="col">
                            <AppWrapper>
                                <AccordionGroup accordions={accordionData} />
                            </AppWrapper>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row accordion--t&c">
                        <div className="col fs--text-center">
                            <h2>4. Terms and Conditions</h2>
                        </div>
                        <div className="col">
                            <AppWrapper>
                                {accordionTCData.map((accordionTCDataItems) => (
                                    <Accordion
                                        accordionTitle={accordionTCDataItems.accordionTitle}
                                        accordionContent={accordionTCDataItems.accordionContent}
                                    />
                                ))}
                            </AppWrapper>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container max-width--md">
                    <div className="row accordion--marketing accordion--border-full">
                        <div className="col fs--text-center">
                            <h2>5. Marketing Accordion</h2>
                        </div>
                        <div className="col fs--text-center">
                            <AppWrapper>
                                {accordionMarketingData.map((accordionMarketingDataItems) => (
                                    <Accordion
                                        accordionTitle={accordionMarketingDataItems.accordionTitle}
                                        accordionContent={accordionMarketingDataItems.accordionContent}
                                    />
                                ))}
                            </AppWrapper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
