import React from 'react';
import { ButtonImageProps } from '../../interfaces/Props';
const ButtonImage: React.FC<ButtonImageProps> = ({ href, title, className, target, imgSrc, imgAlt }) => {
    return (
        <a
            href={href}
            title={title}
            className={className}
            target={target}
        >
            <img
                src={imgSrc}
                alt={imgAlt}
            />
        </a>
    );
};

export default ButtonImage;
