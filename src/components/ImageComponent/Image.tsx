import React from 'react';
import { ImageProps } from '../../interfaces/Props';

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width,
    height,
    className,
    onClick,
    srcSet,
    sizes,
    align,
    border,
    borderRadius,
}) => {
    const imgWidth = width || '';
    const imgHeight = height || '';
    const imgClassName = className || '';
    const imgSrcSet = srcSet || '';
    const imgSizes = sizes || '';
    const imgOnClick = onClick || (() => {});

    // Combine provided className with alignment, border, and borderRadius classes
    const combinedClassName = `${imgClassName} ${align ? `align-${align}` : ''} ${border ? `border-${border}` : ''} ${
        borderRadius ? `bdr-rad--${borderRadius}` : ''
    } ${onClick ? 'cursor-pointer' : ''}`;

    return (
        <img
            src={src}
            alt={alt}
            width={imgWidth}
            height={imgHeight}
            className={combinedClassName}
            onClick={imgOnClick}
            srcSet={imgSrcSet}
            sizes={imgSizes}
        />
    );
};

export default Image;
