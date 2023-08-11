import { CustomerCareProps } from '../interfaces/Props';
import { footerDisclaimer, footerLinkList } from '../local/en/Footer/constants';
export const customerCareData: CustomerCareProps = {
    className: 'row fs--text-center grid-divider',

    callUs: [
        {
            colClass: 'col--md-4 col--lg-6',
            iconClass: 'icon-lg fa-light clr--tertiary-base fa-mobile-signal-out bg--white-base mg-b--15',
            textClass: 'p-1 mg-b--0',
            text: 'Need help placing an order',
            callUsClass: 'h-3 mg-b--0',
            callUsText: 'Call us:',
            phoneHref: 'tel:1-855-936-6417',
            phoneNum: '1-855-936-6417',
            hoursClass: 'hours p-1 mg-b--0',
            hours: 'Hours: 7:00am-8:00pm CT',
            days: '(Monday-Saturday)',
        },

        {
            colClass: 'col--md-4 col--lg-6',
            iconClass: 'icon-lg fa-light clr--tertiary-base fa-headset bg--white-base mg-b--15',
            textClass: 'p-1 mg-b--0',
            text: 'Questions about current services',
            callUsClass: 'h-3 mg-b--0',
            callUsText: 'Call us:',
            phoneHref: 'tel:1-855-936-6417',
            phoneNum: '1-855-936-6417',
            hoursClass: 'hours p-1 mg-b--0',
            hours: 'Hours: 7:00am-8:00pm CT',
            days: '(Monday-Saturday)',
        },
    ],
};
