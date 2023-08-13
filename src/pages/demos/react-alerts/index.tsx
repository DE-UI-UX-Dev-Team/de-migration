import '../../../styles/main.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Alert from '../../../components/Alerts/Alert';

const App: React.FC = () => {
    const [isAlertGroupVisible, setAlertGroupVisible] = useState(false);
    const [isAlertGroupThreeVisible, setAlertGroupThreeVisible] = useState(false);
    const [isAlertGroupFourVisible, setAlertGroupFourVisible] = useState(false);

    const openAlertGroup = () => {
        setAlertGroupVisible(true);
    };

    const openAlertGroupThree = () => {
        setAlertGroupThreeVisible(true);
    };

    const openAlertGroupFour = () => {
        setAlertGroupFourVisible(true);
    };

    const alertDesc =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl';
    const alertCtaText = 'Sample Text';
    const alertCloseButton = '×';
    const typeWarning = 'warning';
    const typeError = 'error';
    const typeInfo = 'info';
    const typeSuccess = 'success';

    return (
        <>
            <section>
                <div className="container">
                    <div className="col">
                        <h2>1. Full width Non Dismissable Alerts</h2>
                    </div>
                    <Alert
                        alertType={typeWarning}
                        ctaText={alertCtaText}
                        desc={alertDesc}
                    />
                    <Alert
                        alertType={typeError}
                        ctaText={alertCtaText}
                        desc={alertDesc}
                    />
                    <Alert
                        alertType={typeSuccess}
                        ctaText={alertCtaText}
                        desc={alertDesc}
                    />
                    <Alert
                        alertType={typeInfo}
                        ctaText={alertCtaText}
                        desc={alertDesc}
                    />
                </div>
            </section>
            <section className="full-width">
                <div className="container bdr-clr--gray-disabled">
                    <div className="row">
                        <div className="col">
                            <h2 className="fs--text-center">2. Full Width Dismissable Banner Alerts</h2>
                        </div>

                        <div className="col fs--text-center">
                            <button
                                className="btn--primary"
                                onClick={openAlertGroup}
                            >
                                Trigger Alert
                            </button>
                        </div>

                        <div className={`col alert-group ${isAlertGroupVisible ? 'displayed' : ''}`}>
                            <Alert
                                alertType={typeSuccess}
                                closeButton={alertCloseButton}
                                desc={alertDesc}
                            />

                            <Alert
                                alertType={typeWarning}
                                closeButton={alertCloseButton}
                                desc={alertDesc}
                            />
                            <Alert
                                alertType={typeError}
                                closeButton={alertCloseButton}
                                desc={alertDesc}
                            />
                            <Alert
                                alertType={typeInfo}
                                closeButton={alertCloseButton}
                                desc={alertDesc}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>3. Dismissable Banner Alerts</h2>
                        </div>
                        <div className="col">
                            <button
                                className="btn--primary"
                                onClick={openAlertGroupThree}
                            >
                                Trigger Alert
                            </button>
                        </div>

                        <div className={`col alert-group-three ${isAlertGroupThreeVisible ? 'displayed' : ''}`}>
                            <Alert
                                alertType={typeSuccess}
                                closeButton={alertCloseButton}
                                desc={alertDesc}
                            />

                            <Alert
                                alertType={typeWarning}
                                closeButton={alertCloseButton}
                                desc={alertDesc}
                            />
                            <Alert
                                alertType={typeError}
                                closeButton={alertCloseButton}
                                desc={alertDesc}
                            />
                            <Alert
                                alertType={typeInfo}
                                closeButton={alertCloseButton}
                                desc={alertDesc}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>4. Dismissable Banner Alerts w/ CTA</h2>
                        </div>
                        <div className="col">
                            <button
                                className="btn--primary"
                                onClick={openAlertGroupFour}
                            >
                                Trigger Alerts w/ CTA
                            </button>
                        </div>
                        <div className={`col alert-group-four ${isAlertGroupFourVisible ? 'displayed' : ''}`}>
                            <Alert
                                alertType={typeWarning}
                                closeButton={alertCloseButton}
                                ctaText={alertCtaText}
                                desc={alertDesc}
                            />
                            <Alert
                                alertType={typeError}
                                closeButton={alertCloseButton}
                                ctaText={alertCtaText}
                                desc={alertDesc}
                            />
                            <Alert
                                alertType={typeSuccess}
                                closeButton={alertCloseButton}
                                ctaText={alertCtaText}
                                desc={alertDesc}
                            />
                            <Alert
                                alertType={typeInfo}
                                closeButton={alertCloseButton}
                                ctaText={alertCtaText}
                                desc={alertDesc}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="col">
                        <h2>5. Non-Dismissable Banner Alerts</h2>
                    </div>
                    <Alert
                        alertType={typeWarning}
                        desc={alertDesc}
                    />
                    <Alert
                        alertType={typeError}
                        desc={alertDesc}
                    />
                    <Alert
                        alertType={typeSuccess}
                        desc={alertDesc}
                    />
                    <Alert
                        alertType={typeInfo}
                        desc={alertDesc}
                    />
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="col">
                        <h2>6. Non-Dismissable Banner Alerts w/ CTA</h2>
                    </div>
                    <Alert
                        alertType={typeWarning}
                        closeButton={alertCloseButton}
                        ctaText={alertCtaText}
                        desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl"
                    />
                    <Alert
                        alertType={typeError}
                        closeButton={alertCloseButton}
                        ctaText={alertCtaText}
                        desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl"
                    />
                    <Alert
                        alertType={typeSuccess}
                        closeButton={alertCloseButton}
                        ctaText={alertCtaText}
                        desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl"
                    />
                    <Alert
                        alertType={typeInfo}
                        closeButton={alertCloseButton}
                        ctaText={alertCtaText}
                        desc=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. Donec placerat nisl"
                    />
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
