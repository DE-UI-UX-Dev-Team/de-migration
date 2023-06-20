import React, { useState, useEffect, Fragment } from 'react';
import sidebarNavigationMeta from '../../data/searchable-cache.json';

const jsonData = sidebarNavigationMeta;

const deepCopy = (obj) => {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    const copy = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }

    return copy;
};

const getQueryParam = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    return params.get('searchTerm');
};

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [matches, setMatches] = useState({});

    useEffect(() => {
        const queryParam = getQueryParam();
        if (queryParam) {
            setSearchTerm(queryParam);
            handleSearch(queryParam);
        }
    }, []);

    const handleSearch = (term) => {
        const searchMatches = {};
        const termsToSearch = ['storybook', 'figma', 'demos', 'css-framework', 'design-token', 'icons'];

        for (const [link, metadata] of Object.entries(jsonData)) {
            if (link.includes(term)) {
                for (const searchTerm of termsToSearch) {
                    if (link.includes(searchTerm)) {
                        metadata['linkType'] = searchTerm.toUpperCase();
                    }
                }
                searchMatches[link] = metadata;
            } else {
                for (const meta of metadata) {
                    for (const [key, value] of Object.entries(meta)) {
                        if (key.includes(term) || value.includes(term)) {
                            if (!searchMatches[link]) {
                                searchMatches[link] = [];
                            }
                            searchMatches[link].push(meta);
                        }
                    }
                }
            }
        }

        setMatches(searchMatches);
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <Fragment>
            <section className="search">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={handleSearch}>
                                <div className="row">
                                    <div className="col">
                                        <label
                                            className="wrap--text-input mg-b--20"
                                            htmlFor="searchTerm"
                                        >
                                            <input
                                                name="searchTerm"
                                                type="text"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                placeholder="Search Term"
                                            />
                                            <span>Enter search term here</span>
                                        </label>
                                    </div>
                                    <div className="col">
                                        <input
                                            type="submit"
                                            value="Search"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <hr className="mg-t--20 mg-b--20 bg--secondary-light-3" />
                        <div className="col">
                            {Object.entries(matches).length === 0 ? (
                                <p className="h-3">No results found.</p>
                            ) : (
                                Object.entries(matches).map(([link, metadata]) => (
                                    <ul
                                        key={link}
                                        className="mg-b--20"
                                    >
                                        <li key={link}>
                                            {metadata.linkType && (
                                                <span className="p-2 bg--primary-light-2 link-type">
                                                    {metadata.linkType}
                                                </span>
                                            )}
                                            <a
                                                href={
                                                    link.includes('css-framework') || link.includes('design-tokens')
                                                        ? '/docs' + link
                                                        : link
                                                }
                                                className="h-3 mg-b--10"
                                                target={
                                                    link.includes('http') || link.includes('/demos') ? '_blank' : ''
                                                }
                                                rel={
                                                    link.includes('http') || link.includes('/demos')
                                                        ? 'noopener noreferrer'
                                                        : ''
                                                }
                                            >
                                                {metadata.some((meta) => meta.title)
                                                    ? metadata
                                                          .find((meta) => meta.title)
                                                          .title.charAt(0)
                                                          .toUpperCase() +
                                                      metadata.find((meta) => meta.title).title.slice(1)
                                                    : link}
                                            </a>
                                        </li>
                                    </ul>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default SearchComponent;
