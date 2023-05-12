import React from 'react';
import { ContentSwitcherProps } from '../../interfaces/Props';

export interface switcherContentItemProps {
    switcherContentItem: ContentSwitcherProps['contentSwitcherObject']['SwitcherContent'];
}

export const SwitcherContent: React.FC<switcherContentItemProps> = ({ switcherContentItem }) => {
    return (
        <div
            data-content-switcher={switcherContentItem.contentAttribute}
            className="content-switcher--content"
        >
            <h3>{switcherContentItem.contentHeading}</h3>
            <p>{switcherContentItem.contentPara}</p>
        </div>
    );
};

export default SwitcherContent;
