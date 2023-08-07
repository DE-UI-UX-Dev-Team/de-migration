import { FooterProps } from '../interfaces/Props';
import { footerDisclaimer, footerLinkList } from '../local/en/Footer/constants';
export const footerData: FooterProps = {
    footerSectionClass: 'bg--primary-base bg--top-curv footer',
    disclaimer: footerDisclaimer,
    linkListArray: [
        {
            containerClass: 'col--md-odd-3 col--lg-3',
            linkListGroup: [
                {
                    linkListHead: footerLinkList.linkList1[0].head,
                    li: [
                        {
                            href: 'https://www.directenergy.com/nh/electricity-plans',
                            name: footerLinkList.linkList1[0].links[0],
                        },
                        {
                            href: 'https://www.nrg.com/business/all-products-and-services.html?debredi=2023nrgredi',
                            name: footerLinkList.linkList1[0].links[1],
                        },
                    ],
                },
                {
                    linkListHead: footerLinkList.linkList1[1].head,
                    li: [
                        {
                            href: 'https://www.directenergy.com/nh/electricity-plans',
                            name: footerLinkList.linkList1[1].links[0],
                        },
                        {
                            href: 'https://www.nrg.com/business/all-products-and-services.html?debredi=2023nrgredi',
                            name: footerLinkList.linkList1[1].links[1],
                        },
                        {
                            href: 'https://www.directenergy.com/nh/electricity-plans',
                            name: footerLinkList.linkList1[1].links[2],
                        },
                        {
                            href: 'https://www.directenergy.com/nh/electricity-plans',
                            name: footerLinkList.linkList1[1].links[3],
                        },
                        {
                            href: 'https://www.directenergy.com/nh/electricity-plans',
                            name: footerLinkList.linkList1[1].links[4],
                        },
                    ],
                },
            ],
        },

        {
            containerClass: 'col--md-odd-3 col--lg-3 info',
            linkListGroup: {
                linkListHead: footerLinkList.linkList2.head,
                li: [
                    {
                        href: 'https://www.directenergy.com/about',
                        name: footerLinkList.linkList2.links[0],
                    },
                    {
                        href: 'https://careers.nrgenergy.com/nrg',
                        name: footerLinkList.linkList2.links[1],
                    },
                    {
                        href: 'https://www.directenergy.com/partner',
                        name: footerLinkList.linkList2.links[2],
                    },
                    {
                        href: 'https://www.directenergy.com/supplychainresponsibilities-disclosure',
                        name: footerLinkList.linkList2.links[3],
                    },
                ],
            },
        },
        {
            containerClass: 'col--md-odd-3 col--lg-3 customer',
            linkListGroup: {
                linkListHead: footerLinkList.linkList3.head,
                li: [
                    {
                        href: 'https://www.directenergy.com/nh/customer-support',
                        name: footerLinkList.linkList3.links[0],
                    },
                    {
                        href: 'https://www.directenergy.com/nh/customer-support/contact-us',
                        name: footerLinkList.linkList3.links[1],
                    },
                    {
                        href: 'https://www.directenergy.com/faqs/nh',
                        name: footerLinkList.linkList3.links[2],
                    },
                    {
                        href: 'https://www.directenergy.com/account/login',
                        name: footerLinkList.linkList3.links[3],
                    },
                ],
            },
        },
        {
            containerClass: 'col--md-4 col--lg-3 mg-t--sm-20 mg-t--md-35 social',
            linkListGroup: {
                linkListHead: '',
                li: [
                    {
                        class: 'social-icon',
                        iconClass: 'icon-md fa-brands fa-facebook',
                        href: 'https://www.facebook.com/directenergy/',
                        name: '',
                    },
                    {
                        class: 'social-icon',
                        iconClass: 'icon-md fa-brands fa-instagram',
                        href: 'https://www.facebook.com/directenergy/',
                        name: '',
                    },
                    {
                        class: 'social-icon',
                        iconClass: 'icon-md fa-brands fa-twitter',
                        href: 'https://www.facebook.com/directenergy/',
                        name: '',
                    },
                    {
                        class: 'social-icon',
                        iconClass: 'icon-md fa-brands fa-youtube',
                        href: 'https://www.facebook.com/directenergy/',
                        name: '',
                    },
                    {
                        class: 'social-icon',
                        iconClass: 'icon-md fa-solid fa-blog',
                        href: 'https://blog.directenergy.com',
                        name: '',
                    },
                ],
            },
        },
    ],
};
