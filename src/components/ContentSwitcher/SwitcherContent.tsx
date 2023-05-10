import React from 'react';

export interface SwitcherContentProps {
    contentAttribute: string;
    contentHeading: string;
    contentPara: string;
}

export const SwitcherContent: React.FC<SwitcherContentProps> = ({ contentAttribute, contentHeading, contentPara }) => {
    return (
        <div
            data-content-switcher={contentAttribute}
            className="content-switcher--content"
        >
            <h3>{contentHeading}</h3>
            <p>{contentPara}</p>
        </div>
    );
};

export default SwitcherContent;
