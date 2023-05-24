import React, { useState, useEffect } from 'react';
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

        for (const [link, metadata] of Object.entries(jsonData)) {
            if (link.includes(term)) {
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
        <section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSearch}>
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
                            <input
                                type="submit"
                                value="Search"
                            />
                        </form>
                    </div>
                    <div className="col">
                        {Object.entries(matches).map(([link, metadata]) => (
                            <ul
                                key={link}
                                className="mg-b--20"
                            >
                                <li key={link}>
                                    <a
                                        href={link}
                                        className="h-3 mg-b--10 display-block"
                                        target={link.includes('http') || link.includes('/demos') ? '_blank' : ''}
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
                                                  .toUpperCase() + metadata.find((meta) => meta.title).title.slice(1)
                                            : link}
                                    </a>
                                </li>
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchComponent;
