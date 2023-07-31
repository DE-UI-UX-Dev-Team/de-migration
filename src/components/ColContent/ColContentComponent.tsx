import React from 'react';
import { ColContentProps } from '../../interfaces/Props';

const ColContentComponent: React.FC<ColContentProps> = ({
    colClass,
    imgSrc,
    imgDesc,
    contentHeading,
    contentPara,
    phone,
    phoneRef,
}) => {
    return (
        <div className={colClass}>
            {imgSrc && (
                <img
                    src={imgSrc}
                    className="img-xs"
                    alt={imgDesc}
                />
            )}
            {contentHeading && <h4>{contentHeading}</h4>}
            {phone && phoneRef && (
                <p>
                    <a href={phoneRef}>{phone}</a>
                </p>
            )}
            {contentPara && <p>{contentPara}</p>}
        </div>
    );
};

export default ColContentComponent;
