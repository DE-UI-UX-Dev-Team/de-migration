import React from 'react';
import { CallUsProps } from '../../interfaces/Props';

const CallUs: React.FC<CallUsProps> = ({
    colClass,
    iconClass,
    textClass,
    text,
    callUsClass,
    callUsText,
    phoneHref,
    phoneNum,
    hoursClass,
    hours,
    days,
}) => {
    return (
        <div className={colClass}>
            <i className={iconClass}></i>
            <p className={textClass}>{text}</p>
            <h3 className={callUsClass}>
                {callUsText}
                <a href={phoneHref}>{phoneNum}</a>
            </h3>
            <p className={hoursClass}>
                <span>{hours}</span>
                <span>{days}</span>
            </p>
        </div>
    );
};

export default CallUs;
