import React from 'react';
import { LinkListProps, FooterProps, ButtonImageGroup } from '../../interfaces/Props';
import LinkList from '../LinkList/LinkList';
import ButtonImageGroupData from '../../config/footerButtons';
const Footer: React.FC<FooterProps> = ({ footerSectionClass, disclaimer, linkListArray }) => {
    return (
        <section className={footerSectionClass}>
            <div className="container">
                <div className="row">
                    {linkListArray.map((linkListGroup, index) => (
                        <LinkList
                            key={index}
                            containerClass={linkListGroup.containerClass}
                            linkListGroup={linkListGroup.linkListGroup}
                        />
                    ))}
                </div>
                <div className="row">
                    <div className="col mg-t--35 mg-b--35">
                        {ButtonImageGroupData.buttonImageArray.map((buttonImage, index) => (
                            <a
                                key={index}
                                href={buttonImage.href}
                                title={buttonImage.title}
                                className={buttonImage.class}
                                target={buttonImage.target}
                            >
                                <img
                                    src={buttonImage.imgSrc}
                                    alt={buttonImage.imgAlt}
                                />
                            </a>
                        ))}
                    </div>
                    <div className="col">
                        <p>{disclaimer}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
