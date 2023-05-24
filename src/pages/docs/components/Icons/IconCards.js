import React, { Fragment, useState } from 'react';
import customFontAwesomeIconNames from '../../data/custom-icons.json';

const IconCards = () => {
    const [searchText, setSearchText] = useState('');

    const handleInputChange = (event) => {
        setSearchText(event.target.value);
    };

    const filteredIcons = customFontAwesomeIconNames.filter((icon) =>
        icon.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleCopyIcon = (icon) => {
        navigator.clipboard.writeText(icon);
        alert(`Copied ${icon} to clipboard!`);
    };

    return (
        <Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        <div
                            className="col--sm-1"
                            style={{ margin: '0 auto 30px auto' }}
                        >
                            <form className="">
                                <label
                                    className="wrap--text-input has-lead-icon"
                                    htmlFor="searchTerm"
                                >
                                    <input
                                        type="text"
                                        placeholder="Enter Icon Name"
                                        value={searchText}
                                        onChange={handleInputChange}
                                    />
                                    <i class="far fa-magnifying-glass icon-sm"></i>
                                    <span>Filter Icons</span>
                                </label>
                            </form>
                        </div>
                    </div>
                    <div className="row icon-listing even-5--md fs--text-center">
                        {filteredIcons.map((icon) => {
                            return (
                                <div
                                    className="col"
                                    key={icon}
                                >
                                    <button
                                        className="mg-b--15 bdr-clr--secondary-light-2"
                                        onClick={() => handleCopyIcon(icon)}
                                    >
                                        <i className={icon + ' fak icon-lg display-block mg-r--0'}></i>
                                    </button>
                                    <span className="display-block">{icon}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default IconCards;
