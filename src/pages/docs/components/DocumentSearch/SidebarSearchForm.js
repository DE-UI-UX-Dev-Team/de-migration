import React, { useState } from 'react';

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Redirect to /docs/search/ with the search term as a query parameter
        window.location.href = `/docs/search/?searchTerm=${encodeURIComponent(searchTerm)}`;
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleFormSubmit(e);
        }
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="mg-l--25 mg-b--30"
        >
            <label
                className="wrap--text-input has-lead-icon"
                htmlFor="search-term"
            >
                <input
                    id="search-term"
                    name="search-term"
                    type="text"
                    value={searchTerm}
                    placeholder=" "
                    onChange={handleInputChange}
                />
                <i class="far fa-magnifying-glass icon-sm clr--primary-base"></i>
                <span>Search Site</span>
            </label>
        </form>
    );
};

export default SearchForm;
