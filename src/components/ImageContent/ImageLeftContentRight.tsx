import React from 'react';
import { ImageContentProps } from '../../interfaces/Props';

const ImageLeftContentRight: React.FC<ImageContentProps> = ({
    imgSrc,
    imgDesc,
    contentHeading,
    contentSubHeading,
    contentPara,
}) => {
    return (
        <div className="row">
            <div className="col--lg-6">
                <img
                    src={imgSrc}
                    className="img-fluid"
                    alt={imgDesc}
                />
            </div>
            <div className="col--lg-6">
                <h3>{contentHeading} </h3>
                <h4>{contentSubHeading}</h4>
                <p>{contentPara}</p>
            </div>
        </div>
    );
};

export default ImageLeftContentRight;
