import React from 'react';
import { CardProps } from '../../interfaces/Props';
import { buttonName } from '../../local/en/cards/constants';

const Card: React.FC<CardProps> = ({
    imgSrc,
    alt,
    title,
    description,
    buttonClassName,
    cardDivClassName,
    cardClassName,
}) => {
    return (
        <div className={cardDivClassName}>
            <div className={cardClassName}>
                {imgSrc && (
                    <div className="card-img">
                        <img
                            src={imgSrc}
                            alt={alt}
                        />
                    </div>
                )}
                <div className="card-body">
                    <h4>
                        <i className="icon-md fak fa-circle-check-light"></i>
                        {title}
                    </h4>
                    <p>{description}</p>
                    <button className={buttonClassName}>{buttonName}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
