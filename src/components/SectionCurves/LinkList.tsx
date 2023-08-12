import React from 'react';
import { LinksProps } from '../../interfaces/Props';

export const LinksList: React.FC<LinksProps> = ({ links }) => {
    return (
        <div className="col--md-2">
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.url}>{link.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
