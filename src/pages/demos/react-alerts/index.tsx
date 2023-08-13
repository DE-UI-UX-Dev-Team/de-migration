import '../../../styles/main.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Alert from '../../../components/Alerts/Alert';
import {
    alertsGroupOne,
    dismissableAlerts,
    dismissableCtaAlerts,
    nonDismissableAlerts,
} from '../../../config/alertData';

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

    return (
        <>
            <section>
                <div className="container">
                    <div className="col">
                        <h2>1. Full width Non Dismissable Alerts</h2>
                    </div>
                    {alertsGroupOne.map((alert, index) => (
                        <Alert
                            key={index}
                            alertType={alert.alertType}
                            ctaText={alert.ctaText}
                            desc={alert.desc}
                        />
                    ))}
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
                            {dismissableAlerts.map((alert, index) => (
                                <Alert
                                    key={index}
                                    alertType={alert.alertType}
                                    closeButton={alert.closeButton}
                                    desc={alert.desc}
                                />
                            ))}
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
                            {dismissableAlerts.map((alert, index) => (
                                <Alert
                                    key={index}
                                    alertType={alert.alertType}
                                    closeButton={alert.closeButton}
                                    desc={alert.desc}
                                />
                            ))}
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
                            {dismissableCtaAlerts.map((alert, index) => (
                                <Alert
                                    key={index}
                                    alertType={alert.alertType}
                                    ctaText={alert.ctaText}
                                    closeButton={alert.closeButton}
                                    desc={alert.desc}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="col">
                        <h2>5. Non-Dismissable Banner Alerts</h2>
                    </div>
                    {nonDismissableAlerts.map((alert, index) => (
                        <Alert
                            key={index}
                            alertType={alert.alertType}
                            desc={alert.desc}
                        />
                    ))}
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="col">
                        <h2>6. Non-Dismissable Banner Alerts w/ CTA</h2>
                    </div>
                    {dismissableCtaAlerts.map((alert, index) => (
                        <Alert
                            key={index}
                            alertType={alert.alertType}
                            ctaText={alert.ctaText}
                            closeButton={alert.closeButton}
                            desc={alert.desc}
                        />
                    ))}
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
