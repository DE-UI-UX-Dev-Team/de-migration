import React from 'react';
import { AccordionProps } from '../../interfaces/Props';

const Accordion: React.FC<AccordionProps> = ({ accordionTitle, accordionContent }) => {
    //generating unique id for each accordion
    const moduleName = 'accordion';
    const returnRandomId = function (moduleName: string) {
        return 'expandable_' + moduleName + '_' + Math.floor(Math.random() * Math.floor(100000));
    };
    const randomId = returnRandomId(moduleName);
    const iconAngle = `<i class="fa fa-angle-down"></i>`;
    return (
        <div data-expandable-container="collapsed">
            <div
                data-expandable-trigger="click"
                className="accordion-title"
                dangerouslySetInnerHTML={{
                    __html: ` ${accordionTitle} ${iconAngle}`,
                }}
            />
            <div
                className="accordion-content"
                data-expandable-target={randomId}
            >
                {accordionContent}
            </div>
        </div>
    );
};

export default Accordion;
