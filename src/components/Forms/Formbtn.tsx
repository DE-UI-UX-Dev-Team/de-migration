import React from 'react';
import { FormbtnProps } from '../../interfaces/Props';

const Formbtn: React.FC<FormbtnProps> = ({ type, value, classNameLabel, classNameInput }) => {
    const containsIconClass = classNameLabel?.includes('icon') || classNameInput?.includes('icon');
    return (
        <div className="col--md-odd-1">
            {containsIconClass ? (
                <label
                    htmlFor={type}
                    className={classNameLabel}
                >
                    <i
                        className="fak fa-pen-solid"
                        aria-hidden="true"
                    ></i>
                    <input
                        type={type}
                        value={value}
                        className={classNameInput}
                    />
                </label>
            ) : (
                <input
                    type={type}
                    value={value}
                    className={classNameInput}
                />
            )}
        </div>
    );
};

export default Formbtn;
