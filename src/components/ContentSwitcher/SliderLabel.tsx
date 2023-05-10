import React from 'react';

export interface SliderLabelProps {
    labelAttribute: string;
    labelHead: string;
    labelSubhead: string;
    forText: string;
}

export const SliderLabel: React.FC<SliderLabelProps> = ({ labelAttribute, labelHead, labelSubhead, forText }) => {
    return (
        <label
            htmlFor={forText}
            data-content-switcher={labelAttribute}
        >
            <div>
                {labelHead ? (
                    <span className="h-4">
                        {labelHead}
                        <br />
                    </span>
                ) : (
                    ''
                )}

                <span className="p-1">{labelSubhead}</span>
            </div>
        </label>
    );
};

export default SliderLabel;
