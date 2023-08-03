import React from 'react';
import waveSvg from '../../assets/images/wave-desktop.svg';

const Hero: React.FC = () => {
    return (
        <div className="hero ">
            <div className="hero-content">
                <div className="hero-left col--lg-6">
                    <div>
                        <h1 className="new-h1">
                            Power <span className="highlight-primary">Your Life</span> with
                            <span className="highlight-secondary">Custom</span> Electricity Plans
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, placeat
                            consequatur.
                        </p>
                        <div>
                            <label
                                className="wrap--text-input has-lead-icon hero-input"
                                htmlFor="zipcode"
                            >
                                <input
                                    type="text"
                                    placeholder="zip code"
                                />
                                <i className="fak fa-location-dot-solid"></i>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="hero-right col--lg-6">
                    <img
                        className="hero-img"
                        src="/assets/images/hero-img.jpg"
                        alt="Hero"
                    />
                    <img
                        src={waveSvg}
                        className="wave-svg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
