import React from 'react';
import { ImageContentProps } from '../../interfaces/Props';

const ImageContentComponent: React.FC<ImageContentProps> = ({
    colReverse,
    imgSrc,
    imgDesc,
    contentHeading,
    contentSubHeading,
    content,
}) => {
    return (
        <>
            {colReverse ? (
                <>
                    <div className="col--lg-6">
                        {contentHeading && <h3>{contentHeading}</h3>}
                        {contentSubHeading && <h4>{contentSubHeading}</h4>}
                        {content && <p>{content}</p>}
                    </div>
                    <div className="col--lg-6">
                        <img
                            src={imgSrc}
                            className="img-fluid"
                            alt={imgDesc}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="col--lg-6">
                        <img
                            src={imgSrc}
                            className="img-fluid"
                            alt={imgDesc}
                        />
                    </div>
                    <div className="col--lg-6">
                        {contentHeading && <h3>{contentHeading}</h3>}
                        {contentSubHeading && <h4>{contentSubHeading}</h4>}
                        {content && <p>{content}</p>}
                    </div>
                </>
            )}
        </>
    );
};

export default ImageContentComponent;
