import React from 'react';
import { TabIndicatorsProps } from '../../interfaces/Props';

const TabScrollIndicators: React.FC<TabIndicatorsProps> = ({ showLeft, showRight, onScrollTabs }) => {
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
