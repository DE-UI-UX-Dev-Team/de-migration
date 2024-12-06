import React, { useState, useEffect } from 'react';

const colors = [
    /* Background Colors */
    '--page-fill-grayscale-default',
    '--page-fill-grayscale-lighter',
    '--page-fill-grayscale-light',
    '--page-fill-primary-brand',

    '--container-fill-grayscale-default',
    '--container-fill-grayscale-1',
    '--container-fill-grayscale-2',

    '--container-fill-primary-default',
    '--container-fill-primary-brand',
    '--container-fill-primary-1',
    '--container-fill-primary-2',
    '--container-fill-primary-3',

    '--container-fill-secondary-default',
    '--container-fill-secondary-brand',
    '--container-fill-secondary-1',
    '--container-fill-secondary-2',
    '--container-fill-secondary-3',
    '--container-fill-secondary-4',

    '--container-fill-tertiary-default',
    '--container-fill-tertiary-brand',
    '--container-fill-tertiary-1',

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
                    height: '60px',
                };
                const colorValue = colorValues[colorVar] || '';
                return (
                    <div
                        className="color-card"
                        key={colorVar}
                    >
                        <div className="color-name">{colorVar}</div>

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
