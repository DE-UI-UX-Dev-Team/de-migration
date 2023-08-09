import React from 'react';

export interface SampleComponentProps {
    text: string;
}

export const SampleComponent: React.FC<SampleComponentProps> = ({ text }) => {
    return <p className="sample-component">{text}</p>;
};

export default SampleComponent;
