import React from 'react';
import { SectionProps } from '../../interfaces/Props';

export const SectionCurve: React.FC<SectionProps> = ({
    sectionClassName,
    imgClassName,
    imgDivClassName,
    contentDivClassName,
    imgSrc,
    imgAlt,
    title,
    content,
    contentSecond,
    btnPrimary,
    btnSecondary,
}) => (
    <section className={sectionClassName}>
        <div className="container">
            <div className="row">
                <div className={`col--md-odd-4 ${imgDivClassName}`}>
                    <img
                        src={imgSrc}
                        className={imgClassName}
                        alt={imgAlt}
                    />
                </div>
                <div className={`col--md-odd-4 ${contentDivClassName}`}>
                    <h1>{title}</h1>
                    <p>{content}</p>
                    {contentSecond && <p>{contentSecond}</p>}
                    {btnPrimary && <button className="btn--primary">{btnPrimary}</button>}
                    {btnSecondary && <button className="btn--secondary">{btnSecondary}</button>}
                </div>
            </div>
        </div>
    </section>
);
