import React from 'react';
import waveSvg from '../../assets/images/wave-desktop.svg';

const Hero: React.FC = () => {
    return (
        <div className="hero">
            <div className="hero-content">
                <div className="hero-left">left side</div>
                <div className="hero-image">
                    <img
                        src="/assets/images/hero-img.png"
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
