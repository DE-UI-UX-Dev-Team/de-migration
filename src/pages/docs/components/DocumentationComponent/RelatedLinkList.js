import React from 'react';

const RelatedLinksList = ({ relatedLinks }) => {
    const parseContent = (content) => {
        const regex = /\[(.*?)\]/; // Regex to match content within [ ]
        const match = content.match(regex);
        if (match) {
            const linkText = match[1];
            const link = content.replace(match[0], '').trim();
            return { linkText, link };
        }
        return { linkText: content, link: '' };
    };

    return (
        <ul className="fs--inline display-inline-block mg-l--10">
            {relatedLinks.map((link, index) => {
                const { linkText, link: href } = parseContent(link);
                const isLastItem = index === relatedLinks.length - 1;

                return (
                    <li
                        className="mg-r--10"
                        key={index}
                    >
                        <a
                            href={`/docs/css-framework/${href}`}
                            className="fw--semibold"
                        >
                            {linkText}
                        </a>
                        {!isLastItem && ','}
                    </li>
                );
            })}
        </ul>
    );
};

export default RelatedLinksList;
