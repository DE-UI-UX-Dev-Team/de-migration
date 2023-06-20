import React from 'react';

export interface SampleComponentProps {
    text: string;
}

export const ParaComponent: React.FC<SampleComponentProps> = ({ text }) => {
    return <p>{text}</p>;
};

export default ParaComponent;
