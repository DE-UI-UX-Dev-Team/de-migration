import React from 'react';
import { AccordionProps } from '../../interfaces/Props';
import Accordion from '../Accordions/Accordion';

interface AccordionGroupProps {
    accordions: AccordionProps[];
}

const AccordionGroup: React.FC<AccordionGroupProps> = ({ accordions }) => {
    return (
        <div data-expandable-group>
            {accordions.map((accordionItem) => (
                <Accordion
                    accordionContent={accordionItem.accordionContent}
                    accordionTitle={accordionItem.accordionTitle}
                />
            ))}
        </div>
    );
};

export default AccordionGroup;
