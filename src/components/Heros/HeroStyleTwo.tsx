import React from 'react';
import { OptionTwoSvg } from './HeroSvg';

const HeroStyleTwo: React.FC = () => {
    return (
        <div className="hero-style-two">
            <div className="hero-content-style-two row">
                <div className="hero-left-style-two col--lg-6 ">
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

                            <div className="col--lg-6 learn-more">
                                <button>
                                    <span>
                                        Learn More <i className="fa-light fa-arrow-down"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="hero-right-style-two  col--lg-6">
                    <img
                        className="hero-img-style-two"
                        src="/assets/images/hero-img.jpg"
                        alt="Hero"
                    />
                    {/* <OptionTwoSvg /> */}
                </div>
            </div>
        </div>
    );
};

export default HeroStyleTwo;
