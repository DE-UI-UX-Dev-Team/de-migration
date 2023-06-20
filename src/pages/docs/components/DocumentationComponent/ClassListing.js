import React from 'react';

const ClassListing = ({ componentId, styles }) => {
    var rows = [];
    for (const key in styles) {
        if (Object.hasOwnProperty.call(styles, key)) {
            const element = styles[key];
            rows.push(key);
        }
    }

    const returnRandomId = function (moduleName) {
        return 'expandable_' + moduleName + '_' + Math.floor(Math.random() * Math.floor(100000));
    };

    const randomId = returnRandomId(componentId);

    return (
        <div
            data-expandable-container="collapsed"
            className="pd-l--0"
        >
            <div class="bdr-btm">
                <div
                    data-expandable-trigger="click"
                    className="accordion-title h-3"
                >
                    Utility Classes & Selectors
                    <i class="fa fa-angle-down mg-l--15"></i>
                </div>
                <div
                    className="accordion-content"
                    data-expandable-target={randomId}
                >
                    <div className="row">
                        {rows.map((value, index) => {
                            return (
                                <div
                                    key={index}
                                    className="col--sm-2 col--lg-4 bg--secondary-light-2 pd-t--5 pd-b--5 fw--semibold"
                                >
                                    {value}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassListing;
