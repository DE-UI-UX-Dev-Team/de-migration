import { alertInfo } from '../local/en/alert/constants';

const alertCloseButton = '×';

export const alertsGroupOne = [
    { alertType: alertInfo.typeWarning, ctaText: alertInfo.alertCtaText, desc: alertInfo.alertDesc },
    { alertType: alertInfo.typeError, ctaText: alertInfo.alertCtaText, desc: alertInfo.alertDesc },
    { alertType: alertInfo.typeSuccess, ctaText: alertInfo.alertCtaText, desc: alertInfo.alertDesc },
    { alertType: alertInfo.typeInfo, ctaText: alertInfo.alertCtaText, desc: alertInfo.alertDesc },
];

export const dismissableAlerts = [
    { alertType: alertInfo.typeWarning, closeButton: alertCloseButton, desc: alertInfo.alertDesc },
    { alertType: alertInfo.typeError, closeButton: alertCloseButton, desc: alertInfo.alertDesc },
    { alertType: alertInfo.typeSuccess, closeButton: alertCloseButton, desc: alertInfo.alertDesc },
    { alertType: alertInfo.typeInfo, closeButton: alertCloseButton, desc: alertInfo.alertDesc },
];

export const dismissableCtaAlerts = [
    {
        alertType: alertInfo.typeWarning,
        ctaText: alertInfo.alertCtaText,
        closeButton: alertCloseButton,
        desc: alertInfo.alertDesc,
    },
    {
        alertType: alertInfo.typeError,
        ctaText: alertInfo.alertCtaText,
        closeButton: alertCloseButton,
        desc: alertInfo.alertDesc,
    },
    {
        alertType: alertInfo.typeSuccess,
        ctaText: alertInfo.alertCtaText,
        closeButton: alertCloseButton,
        desc: alertInfo.alertDesc,
    },
    {
        alertType: alertInfo.typeInfo,
        ctaText: alertInfo.alertCtaText,
        closeButton: alertCloseButton,
        desc: alertInfo.alertDesc,
    },
];

export const nonDismissableAlerts = [
    { alertType: alertInfo.typeWarning, desc: alertInfo.alertDesc },
    { alertType: alertInfo.typeError, desc: alertInfo.alertDesc },
    { alertType: alertInfo.typeSuccess, desc: alertInfo.alertDesc },
    { alertType: alertInfo.typeInfo, desc: alertInfo.alertDesc },
];
