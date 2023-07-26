import React from 'react';
import ParaComponent from './ParaComponent';
import { ParaGroupProps } from '../../interfaces/Props';

const ParaGroup: React.FC<ParaGroupProps> = ({ tabContent }) => {
    return (
        <div className="row">
            {tabContent.map((para, index) => (
                <div className="col">
                    <ParaComponent
                        key={index}
                        text={para.text}
                    />
                </div>
            ))}
        </div>
    );
};

export default ParaGroup;
