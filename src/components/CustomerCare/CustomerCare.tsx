import React from 'react';
import { CustomerCareProps } from '../../interfaces/Props';
import CallUs from '../CallUsComponent/CallUs';

const CustomerCare: React.FC<CustomerCareProps> = ({ className, callUs }) => {
    return (
        <div className="container">
            <div className={className}>
                {callUs.map((item, index) => (
                    <CallUs
                        key={index}
                        colClass={item.colClass}
                        iconClass={item.iconClass}
                        textClass={item.textClass}
                        text={item.text}
                        callUsClass={item.callUsClass}
                        callUsText={item.callUsText}
                        phoneHref={item.phoneHref}
                        phoneNum={item.phoneNum}
                        hoursClass={item.hoursClass}
                        hours={item.hours}
                        days={item.days}
                    />
                ))}
            </div>
        </div>
    );
};

export default CustomerCare;
