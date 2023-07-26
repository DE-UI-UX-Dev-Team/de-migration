import React from 'react';

interface IndicatorsProps {
    showLeft: boolean;
    showRight: boolean;
    onScrollTabs: (left: boolean) => void;
}

const TabScrollIndicators: React.FC<IndicatorsProps> = ({ showLeft, showRight, onScrollTabs }) => {
    return (
        <div className="indicators">
            <a
                className={showLeft ? 'indicator indicator--left' : 'indicator indicator--left hidden'}
                onClick={() => onScrollTabs(true)}
            >
                <i className="icon-md fa-solid fa-chevron-left"></i>
            </a>

            <a
                className={showRight ? 'indicator indicator--right' : 'indicator indicator--right hidden'}
                onClick={() => onScrollTabs(false)}
            >
                <i className="icon-md fa-solid fa-chevron-right"></i>
            </a>
        </div>
    );
};

export default TabScrollIndicators;
