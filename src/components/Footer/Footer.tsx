import React from 'react';
import { FooterProps } from '../../interfaces/Props';
import LinkList from '../LinkList/LinkList';
import ButtonImage from '../ButtonImageComponent/ButtonImage';
import SocialIcons from '../SocialComponent/SocialIcons';
import footerButtonsData from '../../config/footerButtons';
import socialIconsData from '../../config/socialIconsData';
const Footer: React.FC<FooterProps> = ({ footerSectionClass, disclaimer, linkListArray }) => {
    return (
        <footer className={footerSectionClass}>
            <div className="container">
                <div className="row">
                    {linkListArray.map((linkListGroup, index) => (
                        <LinkList
                            key={index}
                            containerClass={linkListGroup.containerClass}
                            linkListGroup={linkListGroup.linkListGroup}
                        />
                    ))}
                    <SocialIcons
                        containerClass={socialIconsData.containerClass}
                        linkListGroup={socialIconsData.linkListGroup}
                    />
                </div>
                <div className="row">
                    <div className="col mg-t--35 mg-b--35">
                        {footerButtonsData.buttonImageArray.map((buttonImage, index) => (
                            <ButtonImage
                                key={index}
                                href={buttonImage.href}
                                title={buttonImage.title}
                                className={buttonImage.className}
                                target={buttonImage.target}
                                imgSrc={buttonImage.imgSrc}
                                imgAlt={buttonImage.imgAlt}
                            />
                        ))}
                    </div>
                    <div className="col">
                        <p>{disclaimer}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
