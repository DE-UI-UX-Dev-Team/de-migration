import React, { useState, useEffect } from 'react';
import '../../../../../assets/images/mlogo.svg';
import '../../../../../assets/images/de-logomark.svg';
import sidebarNavigationData from '../../../data/sidebar-navigation.json';
import SearchForm from '../../DocumentSearch/SidebarSearchForm';

const SidebarNav = () => {
    const capitalizeWords = (str) => {
        return str
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // State for the selected theme
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'default-theme');

    // Update the theme when the dropdown changes
    const handleThemeChange = (event) => {
        const selectedTheme = event.target.value;
        setTheme(selectedTheme);
        document.documentElement.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    };

    // Load the saved theme on initial render
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        const currentPath = window.location.pathname;
        const regex = /^\/docs\/([^/]+)\//;
        const match = currentPath.match(regex);

        if (match && match[1]) {
            const sectionTitle = match[1];
            const expandableTrigger = document.querySelector(`[data-expandable-id="uri-${sectionTitle}"]`);

            if (expandableTrigger) {
                expandableTrigger.setAttribute('data-expandable-container', 'expanded');
            }
        }
    }, []);

    return (
        <aside
            id="sidebar"
            className="bg--primary-darker"
        >
            <img
                className="logo"
                src="/assets/images/mlogo.svg"
                alt="Stacked Logo"
            />
            <img
                className="logo-sm"
                src="/assets/images/de-logomark.svg"
                alt="Logomark"
            />
            <nav>
                <div className="mg-b--30 mg-l--25">
                    <label htmlFor="theme-switcher">Choose Theme:</label>
                    <select
                        id="theme-switcher"
                        value={theme}
                        onChange={handleThemeChange}
                        className="theme-dropdown"
                    >
                        <option value="default-theme">Default Theme</option>
                        <option value="dark-theme">Dark Theme</option>
                    </select>
                </div>
                <SearchForm />
                <ul>
                    {Object.entries(sidebarNavigationData).map(([sectionTitle, sectionItems]) => (
                        <li
                            key={sectionTitle}
                            className="mg-b--0"
                        >
                            <div
                                data-expandable-container="collapsed"
                                data-expandable-id={`uri-${sectionTitle}`}
                                className="expandable-container"
                            >
                                <button
                                    data-expandable-trigger="click"
                                    className="btn--tertiary icon-right h-5 fw--semibold"
                                >
                                    <i className="fa fa-angle-right"></i>
                                    {capitalizeWords(sectionTitle)}
                                </button>
                                <div
                                    className="expandable-content"
                                    data-expandable-target={`example-target-${sectionTitle}`}
                                >
                                    <ul className="mg-t--10">
                                        {sectionItems.map((item, index) => (
                                            <li
                                                className="pd-r--20"
                                                key={index}
                                            >
                                                <a
                                                    href={
                                                        sectionTitle === 'css-framework' ||
                                                        sectionTitle === 'design-tokens' ||
                                                        sectionTitle === 'demos'
                                                            ? sectionTitle !== 'demos'
                                                                ? '/docs/' + sectionTitle + '/' + item.uri
                                                                : '/demos' + item.uri
                                                            : item.uri
                                                    }
                                                    target={
                                                        sectionTitle !== 'css-framework' &&
                                                        sectionTitle !== 'design-tokens' &&
                                                        sectionTitle !== 'Font Awesome'
                                                            ? '_blank'
                                                            : ''
                                                    }
                                                    className="mg-b--10 display-block"
                                                >
                                                    {capitalizeWords(item.title)}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default SidebarNav;
