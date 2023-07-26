import React from 'react';
import { TabProps, TabColumnProps } from '../../interfaces/Props';

const TabContentColumn: React.FC<TabColumnProps> = ({ imgSrc, imgDesc, contentHeading, phone, phoneRef }) => {
    return (
        <div className="col--md-4 col--lg-3">
            <img
                src={imgSrc}
                className="img-xs"
                alt={imgDesc}
            />
            <h4>{contentHeading}</h4>
            <p>
                <a href={phoneRef}>{phone}</a>
            </p>
        </div>
    );
};

export default TabContentColumn;
