// TabsComponent.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TabProps } from '../../interfaces/Props';
import TabScrollIndicators from './TabScrollIndicators';
import { scrollTabs, handleTabScroll } from './TabScrollHelpers'; // Import the functions directly

interface TabsProps<T> {
    tabs: TabProps<T>[]; // Make the interface generic and use the type argument T
    tabContent: React.FC<T>; // Pass the component as a prop
}

const TabsComponent: React.FC<TabsProps<any>> = ({ tabs, tabContent: TabContent }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [tabState, setTabState] = useState({
        showLeft: true,
        showRight: true,
    });

    const scrollDuration: number = 300;

    let tabListRef = useRef<HTMLDivElement | null>(null);

    // Call the handleTabScroll function with the required arguments
    useEffect(() => {
        handleTabScroll(tabs, tabListRef, setTabState); // Call the handleTabScroll function directly
    }, [tabs]);

    const handleScrollTabs = (left: boolean) => {
        scrollTabs(tabListRef, left); // Call the scrollTabs function directly
    };

    return (
        <Tabs
            selectedIndex={tabIndex}
            onSelect={setTabIndex}
        >
            <div
                className="tab-list-wrapper"
                ref={tabListRef}
            >
                <TabList onScrollCapture={() => handleTabScroll(tabs, tabListRef, setTabState)}>
                    {tabs.map((tabItem, index) => (
                        <Tab key={index}>
                            <i className={tabItem.tabIcon}></i>
                            <span>{tabItem.tabTitle}</span>
                        </Tab>
                    ))}
                    <TabScrollIndicators
                        showLeft={tabState.showLeft}
                        showRight={tabState.showRight}
                        onScrollTabs={handleScrollTabs}
                    />
                </TabList>
            </div>
            <div className="tab-panel-wrapper">
                {tabs.map((tabPanelItem, index) => (
                    <TabPanel key={index}>
                        <TabContent tabContent={tabPanelItem.tabContent} />
                    </TabPanel>
                ))}
            </div>
        </Tabs>
    );
};

export default TabsComponent;
