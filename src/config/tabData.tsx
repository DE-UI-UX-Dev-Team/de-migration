import { ImageContentProps, TabProps, ColContentGroupProps } from '../interfaces/Props';
import { tabContent, tabBillingContent, tabColumnContent } from '../local/en/Tabs/constants';

export const tabData: TabProps<ImageContentProps>[] = [
    {
        tabIcon: '',
        tabTitle: tabContent.tab1.title,
        tabContent: {
            imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png',
            contentHeading: tabContent.tab1.head,
            contentSubHeading: tabContent.tab1.subHead,
            contentPara: tabContent.tab1.para,
        },
    },
    {
        tabIcon: '',
        tabTitle: tabContent.tab2.title,
        tabContent: {
            imgSrc: 'https://i.imgur.com/QnaYnJe.png',
            contentHeading: tabContent.tab2.head,
            contentSubHeading: tabContent.tab2.subHead,
            contentPara: tabContent.tab2.para,
        },
    },
    {
        tabIcon: '',
        tabTitle: tabContent.tab3.title,
        tabContent: {
            imgSrc: 'https://i.imgur.com/8rin3WG.png',
            contentHeading: tabContent.tab3.head,
            contentSubHeading: tabContent.tab3.subHead,
            contentPara: tabContent.tab3.para,
        },
    },
    {
        tabIcon: '',
        tabTitle: tabContent.tab4.title,
        tabContent: {
            imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/illustrations/lg_smart_home.png',
            contentHeading: tabContent.tab4.head,
            contentSubHeading: tabContent.tab4.subHead,
            contentPara: tabContent.tab4.para,
        },
    },
    {
        tabIcon: '',
        tabTitle: tabContent.tab5.title,
        tabContent: {
            imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/illustrations/lg_smart_meter.png',
            contentHeading: tabContent.tab5.head,
            contentSubHeading: tabContent.tab5.subHead,
            contentPara: tabContent.tab5.para,
        },
    },
    {
        tabIcon: '',
        tabTitle: tabContent.tab6.title,
        tabContent: {
            imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png',
            contentHeading: tabContent.tab6.head,
            contentSubHeading: tabContent.tab6.subHead,
            contentPara: tabContent.tab6.para,
        },
    },
    {
        tabIcon: '',
        tabTitle: tabContent.tab7.title,
        tabContent: {
            imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/illustrations/lg_protect_mainenance_calculate.png',
            contentHeading: tabContent.tab7.head,
            contentSubHeading: tabContent.tab7.subHead,
            contentPara: tabContent.tab7.para,
        },
    },
];

export const tabDataWithIcon: TabProps<ImageContentProps>[] = [
    {
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: tabContent.tab1.title,
        tabContent: {
            imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png',
            contentHeading: tabContent.tab1.head,
            contentSubHeading: tabContent.tab1.subHead,
            contentPara: tabContent.tab1.para,
        },
    },
    {
        tabIcon: 'icon-md fa-solid fa-image',
        tabTitle: tabContent.tab2.title,
        tabContent: {
            imgSrc: 'https://i.imgur.com/QnaYnJe.png',
            contentHeading: tabContent.tab2.head,
            contentSubHeading: tabContent.tab2.subHead,
            contentPara: tabContent.tab2.para,
        },
    },
    {
        tabIcon: 'icon-md fak fa-pen-solid',
        tabTitle: tabContent.tab3.title,
        tabContent: {
            imgSrc: 'https://i.imgur.com/8rin3WG.png',
            contentHeading: tabContent.tab3.head,
            contentSubHeading: tabContent.tab3.subHead,
            contentPara: tabContent.tab3.para,
        },
    },
    {
        tabIcon: 'icon-md fak fa-thumbs-up-solid',
        tabTitle: tabContent.tab4.title,
        tabContent: {
            imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/illustrations/lg_smart_home.png',
            contentHeading: tabContent.tab4.head,
            contentSubHeading: tabContent.tab4.subHead,
            contentPara: tabContent.tab4.para,
        },
    },
    {
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: tabContent.tab5.title,
        tabContent: {
            imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/illustrations/lg_smart_meter.png',
            contentHeading: tabContent.tab5.head,
            contentSubHeading: tabContent.tab5.subHead,
            contentPara: tabContent.tab5.para,
        },
    },
    {
        tabIcon: 'icon-md  fa-solid fa-star',
        tabTitle: tabContent.tab6.title,
        tabContent: {
            imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png',
            contentHeading: tabContent.tab6.head,
            contentSubHeading: tabContent.tab6.subHead,
            contentPara: tabContent.tab6.para,
        },
    },
    {
        tabIcon: 'icon-md  fa-solid fa-star',
        tabTitle: tabContent.tab7.title,
        tabContent: {
            imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/illustrations/lg_protect_mainenance_calculate.png',
            contentHeading: tabContent.tab7.head,
            contentSubHeading: tabContent.tab7.subHead,
            contentPara: tabContent.tab7.para,
        },
    },
];

export const tabDataBilling: TabProps<ColContentGroupProps['tabContent']>[] = [
    {
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: 'Step1',
        tabContent: [
            {
                colClass: 'col',
                content: tabBillingContent.tab1.para1,
            },
            {
                colClass: 'col',
                content: tabBillingContent.tab1.para2,
            },
            {
                colClass: 'col',
                content: tabBillingContent.tab1.para3,
            },
            {
                colClass: 'col',
                content: tabBillingContent.tab1.para4,
            },
        ],
    },
    {
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: 'Step2',
        tabContent: [
            {
                colClass: 'col',
                content: tabBillingContent.tab2.para1,
            },
            {
                colClass: 'col',
                content: tabBillingContent.tab2.para2,
            },
            {
                colClass: 'col',
                content: tabBillingContent.tab2.para3,
            },
        ],
    },
    {
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: 'Step3',
        tabContent: [
            {
                colClass: 'col',
                content: tabBillingContent.tab3.para1,
            },
            {
                colClass: 'col',
                content: tabBillingContent.tab3.para2,
            },
        ],
    },
    {
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: 'Step4',
        tabContent: [
            {
                colClass: 'col',
                content: tabBillingContent.tab4.para1,
            },
            {
                colClass: 'col',
                content: tabBillingContent.tab4.para2,
            },
            {
                colClass: 'col',
                content: tabBillingContent.tab4.para3,
            },
            {
                colClass: 'col',
                content: tabBillingContent.tab4.para4,
            },
        ],
    },
    {
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: 'Step5',
        tabContent: [
            {
                colClass: 'col',
                content: tabBillingContent.tab5.para1,
            },
            {
                colClass: 'col',
                content: tabBillingContent.tab5.para2,
            },
            {
                colClass: 'col',
                content: tabBillingContent.tab5.para3,
            },
        ],
    },
];

export const tabDataColumns: TabProps<ColContentGroupProps['tabContent']>[] = [
    {
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: 'Electric Utilities',
        tabContent: [
            {
                colClass: 'col--md-4 col--lg-3 fs--text-center',
                imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png',
                imgDesc: tabColumnContent.tab1.col1.imgDesc,
                contentHeading: tabColumnContent.tab1.col1.contentHead,
                phone: '123-335-3333',
                phoneRef: 'tel:123-335-3333',
            },
            {
                colClass: 'col--md-4 col--lg-3 fs--text-center',
                imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png',
                imgDesc: tabColumnContent.tab1.col2.imgDesc,
                contentHeading: tabColumnContent.tab1.col2.contentHead,
                phone: '123-345-3333',
                phoneRef: 'tel:123-335-3333',
            },
            {
                colClass: 'col--md-4 col--lg-3 fs--text-center',
                imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png',
                imgDesc: tabColumnContent.tab1.col3.imgDesc,
                contentHeading: tabColumnContent.tab1.col3.contentHead,
                phone: '453-335-33453',
                phoneRef: 'tel:123-335-3333',
            },
            {
                colClass: 'col--md-4 col--lg-3 fs--text-center',
                imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png',
                imgDesc: tabColumnContent.tab1.col4.imgDesc,
                contentHeading: tabColumnContent.tab1.col4.contentHead,
                phone: '233-335-3333',
                phoneRef: 'tel:123-335-3333',
            },
        ],
    },
    {
        tabIcon: 'icon-md fak fa-circle-check-light',
        tabTitle: 'Natural Gas Utilities',
        tabContent: [
            {
                colClass: 'col--md-4 col--lg-3 fs--text-center',
                imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png',
                imgDesc: tabColumnContent.tab2.col1.imgDesc,
                contentHeading: tabColumnContent.tab2.col1.contentHead,
                phone: '123-335-3333',
                phoneRef: 'tel:123-335-3333',
            },
            {
                colClass: 'col--md-4 col--lg-3 fs--text-center',
                imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png',
                imgDesc: tabColumnContent.tab2.col2.imgDesc,
                contentHeading: tabColumnContent.tab2.col2.contentHead,
                phone: '123-335-3333',
            },
            {
                colClass: 'col--md-4 col--lg-3 fs--text-center',
                imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png',
                imgDesc: tabColumnContent.tab2.col3.imgDesc,
                contentHeading: tabColumnContent.tab2.col3.contentHead,
                phone: '123-335-3333',
                phoneRef: 'tel:123-335-3333',
            },
            {
                colClass: 'col--md-4 col--lg-3 fs--text-center',
                imgSrc: 'https://d38suhqqynrvtl.cloudfront.net/images/photos/ls_computer_O_02.png',
                imgDesc: tabColumnContent.tab2.col4.imgDesc,
                contentHeading: tabColumnContent.tab2.col4.contentHead,
                phone: '123-335-3333',
                phoneRef: 'tel:123-335-3333',
            },
        ],
    },
];
