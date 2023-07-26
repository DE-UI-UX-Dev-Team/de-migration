import React from 'react';
import { TabProps, TabColumnProps, Tab4ColumnProps } from '../../interfaces/Props';
import TabContentColumn from './TabContentColumn';

const TabContent4Column: React.FC<Tab4ColumnProps> = ({ tabContent }) => {
    return (
        <div className="row fs--text-center">
            {tabContent.map((tabColumn, index) => (
                <TabContentColumn
                    key={index}
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

export default TabContent4Column;
