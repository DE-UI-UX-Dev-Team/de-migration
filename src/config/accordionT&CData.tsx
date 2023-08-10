import { AccordionProps } from '../interfaces/Props';
import SampleComponent from '../components/SampleComponent';
import { accordionInfo } from '../local/en/accordions/constants';

const accordionTCData: AccordionProps[] = [
    {
        accordionTitle: `${accordionInfo.titleTerms}`,
        accordionContent: <SampleComponent text={accordionInfo.contentTerms} />,
    },
];

export default accordionTCData;
