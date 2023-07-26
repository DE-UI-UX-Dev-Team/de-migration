import React from 'react';
import { ImageContentProps, TabImageContentProps } from '../../interfaces/Props';
import ImageLeftContentRight from './ImageLeftContentRight';

const ImageLeftContentRightGroup: React.FC<TabImageContentProps> = ({ tabContent }) => {
    return (
        <div className="image-content">
            {tabContent.map((tabColumn, index) => (
                <ImageLeftContentRight
                    key={index}
                    imgSrc={tabColumn.imgSrc}
                    imgDesc={tabColumn.imgDesc}
                    contentHeading={tabColumn.contentHeading}
                    contentSubHeading={tabColumn.contentSubHeading}
                    contentPara={tabColumn.contentPara}
                />
            ))}
        </div>
    );
};

export default ImageLeftContentRightGroup;
