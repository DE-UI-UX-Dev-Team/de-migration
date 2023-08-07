import React from 'react';
import { LinkListGroupProps } from '../../interfaces/Props';

const LinkList: React.FC<LinkListGroupProps> = ({ containerClass, linkListGroup }) => {
    const isLinkListGroupArray = Array.isArray(linkListGroup);
    return (
        <div className={containerClass}>
            {isLinkListGroupArray ? (
                linkListGroup.map((item, index) => (
                    <>
                        <span className="link-list--head">{item.linkListHead}</span>
                        <ul className="fs--link-list">
                            {item.li.map((link, index) => (
                                <li key={index}>
                                    {link.href ? (
                                        <a
                                            className={link.class}
                                            href={link.href}
                                        >
                                            {link.iconClass && <i className={link.iconClass}></i>}
                                            {link.name}
                                        </a>
                                    ) : (
                                        link.iconClass && <i className={link.iconClass}></i>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </>
                ))
            ) : (
                <>
                    <span className="link-list--head">{linkListGroup.linkListHead}</span>
                    <ul className="fs--link-list">
                        {linkListGroup.li.map((link: any, index: any) => (
                            <li key={index}>
                                {link.href ? (
                                    <a
                                        className={link.class}
                                        href={link.href}
                                    >
                                        {link.iconClass && <i className={link.iconClass}></i>}
                                        {link.name}
                                    </a>
                                ) : (
                                    link.iconClass && <i className={link.iconClass}></i>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

export default LinkList;
