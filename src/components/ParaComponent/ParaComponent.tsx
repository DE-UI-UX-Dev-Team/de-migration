import React from 'react';
import { ParaProps } from '../../interfaces/Props';

export const ParaComponent: React.FC<ParaProps> = ({ text }) => {
    return <p>{text}</p>;
};

export default ParaComponent;
