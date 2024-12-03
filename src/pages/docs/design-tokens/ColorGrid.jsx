import React, { useState, useEffect } from 'react';

const colors = [
    /* Background Colors */
    '--page-fill-grayscale-default',
    '--page-fill-grayscale-gray-lighter',
    '--page-fill-grayscale-gray-light',
    '--page-fill-primary-primary-brand',

    '--container-fill-grayscale-default',
    '--container-fill-grayscale-gray-1',
    '--container-fill-grayscale-gray-2',

    '--container-fill-primary-default-pastel',
    '--container-fill-primary-primary-brand',
    '--container-fill-primary-primary-1',
    '--container-fill-primary-primary-2',
    '--container-fill-primary-primary-3',

    '--container-fill-secondary-default-pastel',
    '--container-fill-secondary-secondary-brand',
    '--container-fill-secondary-secondary-1',
    '--container-fill-secondary-secondary-2',
    '--container-fill-secondary-secondary-3',
    '--container-fill-secondary-secondary-4',

    '--container-fill-tertiary-default-pastel',
    '--container-fill-tertiary-tertiary-brand',
    '--container-fill-tertiary-tertiary-1',

    '--container-fill-status-error',
    '--container-fill-status-success',
    '--container-fill-status-info',
    ' --container-fill-status-warning',
    '--container-fill-status-disabled',
];

function ColorGrid() {
    const [colorValues, setColorValues] = useState({});

    useEffect(() => {
        const computedStyles = getComputedStyle(document.documentElement);
        const values = {};
        colors.forEach((colorVar) => {
            const colorValue = computedStyles.getPropertyValue(colorVar).trim();
            values[colorVar] = colorValue;
        });
        setColorValues(values);
    }, []);

    return (
        <div className="color-grid">
            {colors.map((colorVar) => {
                const style = {
                    backgroundColor: `var(${colorVar})`,
                    // width: "600px",
                    height: '60px',
                };
                const colorValue = colorValues[colorVar] || '';
                return (
                    <div
                        className="color-card"
                        key={colorVar}
                    >
                        <div className="color-name">{colorVar}</div>

                        {/* <div className="color-value">{colorValue}</div> */}
                        <div
                            className="color-swatch row"
                            style={style}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
}

export default ColorGrid;
