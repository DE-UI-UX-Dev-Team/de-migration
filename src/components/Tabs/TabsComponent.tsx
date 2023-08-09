// TabsComponent.tsx
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TabsGroupProps, ImageContentProps, ColContentProps, ColContentGroupProps } from '../../interfaces/Props';
import TabScrollIndicators from './TabScrollIndicators';
import { scrollTabs, handleTabScroll } from './TabScrollHelpers'; // Import the functions directly

const TabsComponent: React.FC<TabsGroupProps<any>> = ({ tabs, tabContent: TabContent }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [tabState, setTabState] = useState({
        showLeft: true,
        showRight: true,
    });

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
                        <div className="row">
                            {Array.isArray(tabPanelItem.tabContent) ? (
                                tabPanelItem.tabContent.map((tabContentItem, tabContentIndex) => (
                                    <TabContent
                                        key={tabContentIndex}
                                        {...tabContentItem}
                                    />
                                ))
                            ) : (
                                // Handle the case when tabContent is not an array.

                                <TabContent {...tabPanelItem.tabContent} />
                            )}
                        </div>
                    </TabPanel>
                ))}
            </div>
        </Tabs>
    );
};

export default TabsComponent;
