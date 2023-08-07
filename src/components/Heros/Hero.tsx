import React, { useEffect, useState } from 'react';
import TextInput from '../Forms/TextInput';
import { DesktopSvg, MobileSvg, TabletSvg } from './HeroSvg';

const Hero: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobileScreen = windowWidth < 768;
    const isTabletScreen = windowWidth <= 992;

    return (
        <div className="hero ">
            <div className="hero-content row">
                <div className="hero-left col--lg-6 ">
                    <form>
                        <div className="row ">
                            <div className="col">
                                <h1 className="new-h1">
                                    Power <span className="highlight-primary">Your Life</span> with
                                    <span className="highlight-secondary">&nbsp;Custom</span> Electricity Plans
                                </h1>

                                <p className="new-p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna.
                                </p>
                            </div>

                            <TextInput
                                id="209m"
                                label="Zip Code"
                                name="zip-code"
                                showIcon={true}
                                className="wrap--text-input has-lead-icon "
                                classNameDiv="col--sm-2 "
                                placeholder="Zip Code "
                                pattern="^[0-9]{5}(?:-[0-9]{4})?$"
                                errorMessage="Incorrect Zipcode"
                            />
                            <div className="col--sm-2 ">
                                <button>Sample Text</button>
                            </div>

                            <div className="col new-span">
                                <span>
                                    <span className="underlined-text">Learn More</span>
                                    <i className="fa-light fa-arrow-down"></i>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="hero-right  col--lg-6">
                    <img
                        className="hero-img"
                        src="/assets/images/hero-img.jpg"
                        alt="Hero"
                    />
                    {isMobileScreen ? <MobileSvg /> : isTabletScreen ? <TabletSvg /> : <DesktopSvg />}
                </div>
            </div>
        </div>
    );
};

export default Hero;
