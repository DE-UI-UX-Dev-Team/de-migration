import { AccordionProps } from '../interfaces/Props';
import ParaComponent from '../components/ParaComponent/ParaComponent';

const accordionTCData: AccordionProps[] = [
    {
        accordionTitle: 'Terms and Conditions',
        accordionContent: (
            <ParaComponent text="*The Amazon Prime Membership ('Prime') offer is available on qualifying 'On Us' plans only. You must have a valid email address to participate in the offer. You will receive a Prime Membership Promotional Code ('Promo Code') by email after your first full invoice payment. The Promo Code will cover the cost of your first Prime period for up to 12 months. If you are new to Amazon Prime, you will need to sign up during the redemption process. The second 12-month Promo Code will be sent no later than 2 months before the expiration of your first Promo Code. Prime has a value of $139/year. You must remain enrolled in the qualifying 'On Us' plan, and your account must not be in arrears, pending cancellation, or inactive to receive each Promo Code. Offer subject to change. Prime is subject to Amazon Prime Terms and Conditions. Visit amazon.com/prime for more information. Your Amazon Prime membership automatically renews for the membership fee in effect at the time of renewal plus applicable taxes. Amazon Prime Membership Codes cannot be transferred or resold. Amazon.com, Inc. and its affiliates are not sponsors of this promotion. All Amazon ,  are IP of Amazon.com, Inc. or its affiliates." />
        ),
    },
];

export default accordionTCData;
