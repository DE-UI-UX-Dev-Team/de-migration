import React from 'react';
import { TabColumnGroupProps } from '../../interfaces/Props';
import TabContentColumn from './TabContentColumn';

const TabContentColumnGroup: React.FC<TabColumnGroupProps> = ({ tabContent }) => {
    return (
        <div className="row fs--text-center">
            {tabContent.map((tabColumn, index) => (
                <TabContentColumn
                    key={index}
                    divColClassName={tabColumn.divColClassName}
                    imgSrc={tabColumn.imgSrc}
                    imgDesc={tabColumn.imgDesc}
                    contentHeading={tabColumn.contentHeading}
                    phone={tabColumn.phone}
                    phoneRef={tabColumn.phoneRef}
                />
            ))}
        </div>
    );
};

export default TabContentColumnGroup;
