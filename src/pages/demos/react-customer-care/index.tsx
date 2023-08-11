import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import CustomerCare from '../../../components/CustomerCare/CustomerCare';
import Footer from '../../../components/Footer/Footer';
import { footerData } from '../../../config/footerData';

import { customerCareData } from '../../../config/customerCareData';

const App: React.FC = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="fs--text-center">
                                1. Section w/ White BG &amp; Customer Care w/ White BG - Flat Footer
                            </h2>
                        </div>
                        <div className="col">
                            <p>
                                This is a normal paragraph (<code>p</code> element). To add some length to it, let us
                                mention that this page was primarily written for testing the effect of{' '}
                                <strong>user style sheets</strong>. You can use it for various other purposes as well,
                                like just checking how your browser displays various HTML elements by default. It can
                                also be useful when testing conversions from HTML format to other formats, since some
                                elements can go wrong then.
                            </p>
                            <p>
                                This is a normal paragraph (<code>p</code> element). To add some length to it, let us
                                mention that this page was primarily written for testing the effect of{' '}
                                <strong>user style sheets</strong>. You can use it for various other purposes as well,
                                like just checking how your browser displays various HTML elements by default. It can
                                also be useful when testing conversions from HTML format to other formats, since some
                                elements can go wrong then.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="customer-care">
                <CustomerCare
                    className={customerCareData.className}
                    callUs={customerCareData.callUs}
                ></CustomerCare>
            </section>
            <Footer
                footerSectionClass={footerData.footerSectionClass}
                disclaimer={footerData.disclaimer}
                linkListArray={footerData.linkListArray}
            ></Footer>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="fs--text-center">
                                2. Section w/ White BG & Customer Care w/ White BG - Curved Footer
                            </h2>
                        </div>
                        <div className="col">
                            <p>
                                This is a normal paragraph (<code>p</code> element). To add some length to it, let us
                                mention that this page was primarily written for testing the effect of{' '}
                                <strong>user style sheets</strong>. You can use it for various other purposes as well,
                                like just checking how your browser displays various HTML elements by default. It can
                                also be useful when testing conversions from HTML format to other formats, since some
                                elements can go wrong then.
                            </p>
                            <p>
                                This is a normal paragraph (<code>p</code> element). To add some length to it, let us
                                mention that this page was primarily written for testing the effect of{' '}
                                <strong>user style sheets</strong>. You can use it for various other purposes as well,
                                like just checking how your browser displays various HTML elements by default. It can
                                also be useful when testing conversions from HTML format to other formats, since some
                                elements can go wrong then.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-btm-curv-reverse bg-curv--tertiary-dark-1 customer-care">
                <CustomerCare
                    className={customerCareData.className}
                    callUs={customerCareData.callUs}
                ></CustomerCare>
            </section>
            <Footer
                footerSectionClass={footerData.footerSectionClass}
                disclaimer={footerData.disclaimer}
                linkListArray={footerData.linkListArray}
            ></Footer>

            <section className="bg--secondary-light-1">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="fs--text-center">
                                3. Section w/ Gray BG & Customer Care w/ White BG - Curved Footer
                            </h2>
                        </div>
                        <div className="col">
                            <p>
                                This is a normal paragraph (<code>p</code> element). To add some length to it, let us
                                mention that this page was primarily written for testing the effect of{' '}
                                <strong>user style sheets</strong>. You can use it for various other purposes as well,
                                like just checking how your browser displays various HTML elements by default. It can
                                also be useful when testing conversions from HTML format to other formats, since some
                                elements can go wrong then.
                            </p>
                            <p>
                                This is a normal paragraph (<code>p</code> element). To add some length to it, let us
                                mention that this page was primarily written for testing the effect of{' '}
                                <strong>user style sheets</strong>. You can use it for various other purposes as well,
                                like just checking how your browser displays various HTML elements by default. It can
                                also be useful when testing conversions from HTML format to other formats, since some
                                elements can go wrong then.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-btm-curv-reverse bg-curv--tertiary-dark-1 customer-care">
                <CustomerCare
                    className={customerCareData.className}
                    callUs={customerCareData.callUs}
                ></CustomerCare>
            </section>
            <Footer
                footerSectionClass={footerData.footerSectionClass}
                disclaimer={footerData.disclaimer}
                linkListArray={footerData.linkListArray}
            ></Footer>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="fs--text-center">
                                4. Section w/ White BG & Customer Care w/ Gradient Blue BG - Curved Footer
                            </h2>
                        </div>
                        <div className="col">
                            <p>
                                This is a normal paragraph (<code>p</code> element). To add some length to it, let us
                                mention that this page was primarily written for testing the effect of{' '}
                                <strong>user style sheets</strong>. You can use it for various other purposes as well,
                                like just checking how your browser displays various HTML elements by default. It can
                                also be useful when testing conversions from HTML format to other formats, since some
                                elements can go wrong then.
                            </p>
                            <p>
                                This is a normal paragraph (<code>p</code> element). To add some length to it, let us
                                mention that this page was primarily written for testing the effect of{' '}
                                <strong>user style sheets</strong>. You can use it for various other purposes as well,
                                like just checking how your browser displays various HTML elements by default. It can
                                also be useful when testing conversions from HTML format to other formats, since some
                                elements can go wrong then.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg--tertiary-base--grad-1 bg-btm-curv bg-curv--tertiary-dark-1 customer-care">
                <CustomerCare
                    className={customerCareData.className}
                    callUs={customerCareData.callUs}
                ></CustomerCare>
            </section>
            <Footer
                footerSectionClass={footerData.footerSectionClass}
                disclaimer={footerData.disclaimer}
                linkListArray={footerData.linkListArray}
            ></Footer>
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
