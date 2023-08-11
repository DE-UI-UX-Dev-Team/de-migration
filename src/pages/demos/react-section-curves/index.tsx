import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { clickBtn, content, imageInfo } from '../../../local/en/section-curves/constants';

const App: React.FC = () => {
    return (
        <>
            <section className="bg--secondary-light-1 bg-btm-curv bg-animated-curv-blue">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <h1>Secondary Light Background w/ Animated Blue Curve</h1>
                            <p>{content.descOne}</p>
                            <button className="btn--primary">{clickBtn}</button>
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <img
                                src={imageInfo.srcOne}
                                className="img-fluid mx-auto w-auto"
                                alt={imageInfo.altOne}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--secondary-light-1 bg-btm-curv bg-animated-curv-orange">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <img
                                src={imageInfo.srcTwo}
                                className="img-fluid"
                                alt={imageInfo.altTwo}
                            />
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <h1>Secondary Light Background w/ Animated Orange Curve</h1>
                            <p>{content.descTwo}</p>
                            <button className="btn--secondary">{clickBtn}</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--tertiary-base bg-btm-curv">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <h1>
                                Tertiary Base Background w/
                                <br /> Bottom-Curve
                            </h1>
                            <p>{content.descTwo}</p>
                            <button className="btn--primary">{clickBtn}</button>
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <img
                                className="text-center"
                                src={imageInfo.srcThree}
                                alt={imageInfo.altThree}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--tertiary-base bg-top-curv-reverse">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <img
                                alt={imageInfo.altFour}
                                className="text-img img-fluid mb-0"
                                src={imageInfo.srcFour}
                            />
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <h1>
                                Tertiary Background w/
                                <br /> Top-Curve Reverse
                            </h1>
                            <p>{content.descTwo}</p>
                            <p>{content.descThree}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--tertiary-base bg-top-curv bg-btm-curv-reverse">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <h1>
                                Tertiary Background w/
                                <br /> Top-Curve & Bottom Reverse Curve
                            </h1>
                            <p>{content.descTwo}</p>
                            <button className="btn--primary">{clickBtn}</button>
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <img
                                src={imageInfo.srcFive}
                                className="img-fluid"
                                alt={imageInfo.altFive}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--tertiary-base bg-btm-curv-reverse">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <img
                                src={imageInfo.srcSix}
                                alt="some description"
                                className={imageInfo.altSix}
                            />
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <h1>
                                Tertiary Base Background w/
                                <br />
                                Bottom-Curve Reverse
                            </h1>
                            <p>{content.descFour}</p>
                            <button className="btn--primary">{clickBtn}</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--tertiary-base bg-top-curv">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <h1>
                                Tertiary Base Background w/
                                <br /> Top Curve
                            </h1>
                            <p>{content.descTwo}</p>
                            <p>{content.descThree}</p>
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <img
                                className="text-center img-fluid"
                                src={imageInfo.srcThree}
                                alt={imageInfo.altThree}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--primary-light-1 bg-btm-curv">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <h1>
                                Primary Light Background w/
                                <br /> Bottom-Curve
                            </h1>
                            <p>{content.descTwo}</p>
                            <button className="btn--primary">{clickBtn}</button>
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <img
                                className="text-center"
                                src={imageInfo.srcThree}
                                alt={imageInfo.altThree}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--primary-light-1 bg-top-curv-reverse">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <img
                                alt={imageInfo.altFour}
                                className="text-img img-fluid mb-0"
                                src={imageInfo.srcFour}
                            />
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <h1>
                                Primary Light Background w/
                                <br /> Top Curve Reverse
                            </h1>
                            <p>{content.descTwo}</p>
                            <p>{content.descThree}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--primary-light-1 bg-top-curv bg-btm-curv-reverse">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <h1>
                                Primary Light Background w/
                                <br /> Top Curve & Bottom Curve Reverse
                            </h1>
                            <p>{content.descTwo}</p>
                            <button className="btn--primary">{clickBtn}</button>
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <img
                                src={imageInfo.srcFive}
                                className="img-fluid"
                                alt={imageInfo.altFive}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--primary-light-1 bg-btm-curv-reverse">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <h1>
                                Primary Light Background w/
                                <br />
                                Bottom-Curve Reverse
                            </h1>
                            <p>{content.descFour}</p>
                            <button className="btn--primary">{clickBtn}</button>
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <img
                                src={imageInfo.srcSix}
                                alt={imageInfo.altSix}
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--primary-light-1 bg-top-curv">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <h1>Primary Light Background w/ Top Curve</h1>
                            <p>{content.descTwo}</p>
                            <p>{content.descThree}</p>
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <img
                                className="text-center img-fluid"
                                src={imageInfo.srcThree}
                                alt={imageInfo.altThree}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--secondary-light-1 bg-btm-curv">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <h1>Secondary Light Background w/ Bottom-Curve</h1>
                            <p>{content.descTwo}</p>
                            <button className="btn--primary">{clickBtn}</button>
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <img
                                className="text-center"
                                src={imageInfo.srcThree}
                                alt={imageInfo.altThree}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--secondary-light-1 bg-top-curv-reverse">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <img
                                alt={imageInfo.altFour}
                                className="text-img img-fluid mb-0"
                                src={imageInfo.srcFour}
                            />
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <h1>Secondary Light Background w/ Top Curve Reverse</h1>
                            <p>{content.descTwo}</p>
                            <p>{content.descThree}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--secondary-light-1 bg-top-curv bg-btm-curv-reverse">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <h1>Secondary Light Background w/ Top Curve & Bottom Curve Reverse</h1>
                            <p>{content.descTwo}</p>
                            <button className="btn--primary">{clickBtn}</button>
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <img
                                src={imageInfo.srcFive}
                                className="img-fluid"
                                alt={imageInfo.altFive}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--secondary-light-1 bg-btm-curv-reverse">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <img
                                src={imageInfo.srcSix}
                                alt={imageInfo.altSix}
                                className="img-fluid"
                            />
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <h1>Secondary Light Background w/Bottom-Curve Reverse</h1>
                            <p>{content.descFour}</p>
                            <button className="btn--primary">{clickBtn}</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--secondary-light-1 bg-top-curv">
                <div className="container">
                    <div className="row">
                        <div className="col--md-odd-4">
                            <h1>Secondary Light Background w/ Top Curve</h1>
                            <p>{content.descTwo}</p>
                            <p>{content.descThree}</p>
                        </div>
                        <div className="col--md-odd-4 col--md-odd-1-push">
                            <img
                                className="text-center img-fluid"
                                src={imageInfo.srcThree}
                                alt={imageInfo.altThree}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg--tertiary-base--grad-1 bg-btm-curv bg-curv--tertiary-dark-1">
                <div className="container">
                    <h2>Customer Care Section</h2>
                    <h3>
                        Tertiary Base Background Gradient
                        <br /> Blending into the Footer
                    </h3>
                    <div className="row fs--text-center">
                        <div className="col--md-odd-3 col--lg-4">
                            <h3 className="h-4 mg-b--5">Need help placing an order</h3>
                            <p className="h-3 mg-b--5">
                                Call us: <a href="tel:1-855-936-6417">1-855-936-6417</a>
                            </p>
                            <p className="h-4">Hours: 7:00am-8:00pm CT (Monday-Saturday)</p>
                        </div>
                        <div className="col--md-odd-3 col--lg-4">
                            <h3 className="h-4 mg-b--5">Questions about current services</h3>
                            <p className="h-3 mg-b--5">
                                Call us: <a href="tel:1-855-936-6417">1-855-936-6417</a>
                            </p>
                            <p className="h-4">Hours: 7:00am-8:00pm CT (Monday-Saturday)</p>
                        </div>
                        <div className="col--md-odd-3 col--lg-4">
                            <h3 className="h-4 mg-b--5">Login to your myaccount</h3>
                            <p className="h-3 mg-b--5">
                                <a href="http://www.useit.com">My Account Log In</a>
                            </p>
                            <p className="h-4">
                                First time user? <a href="#">Create an account</a>
                            </p>
                        </div>
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
                        <div className="col--md-2">
                            <ul>
                                <li>
                                    <a href="https://www.directenergy.com/terms-of-use">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/text-messages-faqs/sms-terms-and-conditions">
                                        SMS Terms &amp; Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/privacy-policy">Privacy Policy</a>
                                </li>

                                <li>
                                    <a href="https://www.directenergy.com/learning-center">Learning Center</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/sitemap">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col--md-2">
                            <ul>
                                <li>
                                    <a href="https://www.directenergy.com/terms-of-use">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/text-messages-faqs/sms-terms-and-conditions">
                                        SMS Terms &amp; Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/privacy-policy">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/learningr">Learning Center</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/sitemap">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col--md-2">
                            <ul>
                                <li>
                                    <a href="https://www.directenergy.com/terms-of-use">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/text-messages-faqs/sms-terms-and-conditions">
                                        SMS Terms &amp; Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/privacy-policy">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/learningr">Learning Center</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/sitemap">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className=" bg--primary-dark-1--grad-1 bg-btm-curv bg-curv--primary-dark-1">
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
                        <div className="col--md-odd-3 col--lg-4">
                            <h3 className="h-4 mg-b--5">Need help placing an order</h3>
                            <p className="h-3 mg-b--5">
                                Call us: <a href="tel:1-855-936-6417">1-855-936-6417</a>
                            </p>
                            <p className="h-4">Hours: 7:00am-8:00pm CT (Monday-Saturday)</p>
                        </div>
                        <div className="col--md-odd-3 col--lg-4">
                            <h3 className="h-4 mg-b--5">Questions about current services</h3>
                            <p className="h-3 mg-b--5">
                                Call us: <a href="tel:1-855-936-6417">1-855-936-6417</a>
                            </p>
                            <p className="h-4">Hours: 7:00am-8:00pm CT (Monday-Saturday)</p>
                        </div>
                        <div className="col--md-odd-3 col--lg-4">
                            <h3 className="h-4 mg-b--5">Login to your myaccount</h3>
                            <p className="h-3 mg-b--5">
                                <a href="http://www.useit.com">My Account Log In</a>
                            </p>
                            <p className="h-4">
                                First time user? <a href="#">Create an account</a>
                            </p>
                        </div>
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
                        <div className="col--md-2">
                            <ul>
                                <li>
                                    <a href="https://www.directenergy.com/terms-of-use">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/text-messages-faqs/sms-terms-and-conditions">
                                        SMS Terms &amp; Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/privacy-policy">Privacy Policy</a>
                                </li>

                                <li>
                                    <a href="https://www.directenergy.com/learning-center">Learning Center</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/sitemap">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col--md-2">
                            <ul>
                                <li>
                                    <a href="https://www.directenergy.com/terms-of-use">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/text-messages-faqs/sms-terms-and-conditions">
                                        SMS Terms &amp; Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/privacy-policy">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/learningr">Learning Center</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/sitemap">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col--md-2">
                            <ul>
                                <li>
                                    <a href="https://www.directenergy.com/terms-of-use">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/text-messages-faqs/sms-terms-and-conditions">
                                        SMS Terms &amp; Conditions
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/privacy-policy">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/learningr">Learning Center</a>
                                </li>
                                <li>
                                    <a href="https://www.directenergy.com/sitemap">Sitemap</a>
                                </li>
                            </ul>
                        </div>
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
