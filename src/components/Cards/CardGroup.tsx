import React from 'react';
import Card from './Card';
import { CardProps } from '../../interfaces/Props';

interface CardGroupProps {
    cards: CardProps[];
    className?: string;
}

const CardGroup: React.FC<CardGroupProps> = ({ cards, className }) => {
    const cardGroupClassName = className ? `row ${className}` : 'row';

    return (
        <div className={cardGroupClassName}>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    imgSrc={card.imgSrc}
                    alt={card.alt}
                    title={card.title}
                    description={card.description}
                    cardDivClassName={card.cardDivClassName}
                    cardClassName={card.cardClassName}
                    buttonClassName={card.buttonClassName}
                />
            ))}
        </div>
    );
};

export default CardGroup;
