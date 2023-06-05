import React from 'react';

const ExpandNavButton = () => {
    const handleClick = () => {
        document.body.classList.toggle('sidebar-expanded');
    };

    return (
        <button
            className="doc-nav-button btn--tertiary"
            onClick={handleClick}
        >
            <i className="fa-regular fa-bars"></i>
        </button>
    );
};

export default ExpandNavButton;
