import React from 'react';
import { LinkListGroupProps } from '../../interfaces/Props';
import LinkList from '../LinkList/LinkList';
const SocialIcons: React.FC<LinkListGroupProps> = ({ containerClass, linkListGroup }) => {
    return (
        <LinkList
            containerClass={containerClass}
            linkListGroup={linkListGroup}
        />
    );
};

export default SocialIcons;
