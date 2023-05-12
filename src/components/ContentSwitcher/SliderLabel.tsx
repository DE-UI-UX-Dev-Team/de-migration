import React from 'react';
import { ContentSwitcherProps } from '../../interfaces/Props';

export interface sliderLabelItemProps {
    sliderLabelItem: ContentSwitcherProps['contentSwitcherObject']['SliderLabel'];
}

export const SliderLabel: React.FC<sliderLabelItemProps> = ({ sliderLabelItem }) => {
    return (
        <label
            htmlFor={sliderLabelItem.forText}
            data-content-switcher={sliderLabelItem.labelAttribute}
        >
            <div>
                {sliderLabelItem.labelHead ? (
                    <span className="h-4">
                        {sliderLabelItem.labelHead}
                        <br />
                    </span>
                ) : (
                    ''
                )}

                <span className="p-1">{sliderLabelItem.labelSubhead}</span>
            </div>
        </label>
    );
};

export default SliderLabel;
