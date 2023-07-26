import React from 'react';
import { ImageContentProps } from '../../interfaces/Props';

const ImageRightContentLeft: React.FC<ImageContentProps> = ({
    imgSrc,
    imgDesc,
    contentHeading,
    contentSubHeading,
    contentPara,
}) => {
    return (
        <div className="row">
            <div className="col--lg-6">
                <h3>{contentHeading} </h3>
                <h4>{contentSubHeading}</h4>
                <p>{contentPara}</p>
            </div>
            <div className="col--lg-6">
                <img
                    src={imgSrc}
                    className="img-fluid"
                    alt={imgDesc}
                />
            </div>
        </div>
    );
};

export default ImageRightContentLeft;
