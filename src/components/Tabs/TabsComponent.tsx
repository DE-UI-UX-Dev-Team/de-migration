import React, { useState, useEffect, useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TabProps } from '../../interfaces/Props';

interface TabsProps {
    tabs: TabProps[];
}

const TabsComponent: React.FC<TabsProps> = ({ tabs }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [tabState, setTabState] = useState({
        showLeft: true,
        showRight: true,
    });

    const scrollDuration: number = 300;

    let tabListRef = useRef<HTMLDivElement | null>(null);

    const handleTabScroll = () => {
        if (tabListRef.current) {
            const tabListElement = tabListRef.current.querySelector('.react-tabs__tab-list') as HTMLElement;
            if (tabListElement) {
                const menuWrapperSize = tabListElement.offsetWidth;
                let menuPosition = tabListElement.scrollLeft;
                menuPosition = menuPosition ? menuPosition : 0;
                const itemElement = tabListElement.querySelector('li.react-tabs__tab') as HTMLLIElement;
                const itemSize = itemElement?.offsetWidth;
                const menuSize: number = tabs.length * itemSize;
                let menuInvisibleSize: number = menuSize - (menuWrapperSize ? menuWrapperSize : 0);
                const menuEndOffset = menuInvisibleSize - 20;
                let showLeft = false;
                let showRight = false;
                if (menuPosition <= 20) {
                    showLeft = false;
                    showRight = true;
                } else if (menuPosition < menuEndOffset) {
                    showLeft = true;
                    showRight = true;
                } else if (menuPosition >= menuEndOffset) {
                    showLeft = true;
                    showRight = false;
                }
                setTabState({
                    showLeft,
                    showRight,
                });
            }
        }
    };

    const scrollTabs = (left: boolean) => {
        if (tabListRef.current) {
            const tabListElement = tabListRef.current.querySelector(
                '.tab-list-wrapper .react-tabs__tab-list'
            ) as HTMLElement;
            if (tabListElement && tabListElement.offsetWidth) {
                const menuPosition = tabListElement.scrollLeft;
                const menuWrapperSize = tabListElement.offsetWidth || 0;
                const targetScrollLeft = menuPosition + (left ? -menuWrapperSize : +menuWrapperSize);
                if (menuWrapperSize) {
                    tabListElement.scrollTo({
                        left: targetScrollLeft,
                        behavior: 'smooth',
                    });
                }
            }
        }
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
                <TabList onScrollCapture={() => handleTabScroll()}>
                    {tabs.map((tabItem, index) => (
                        <Tab key={index}>
                            <i className={tabItem.tabIcon}></i>
                            <span>{tabItem.tabTitle}</span>
                        </Tab>
                    ))}
                    <div className="indicators">
                        <a
                            className={
                                tabState.showLeft ? 'indicator indicator--left' : 'indicator indicator--left hidden'
                            }
                            onClick={() => scrollTabs(true)}
                        >
                            <i className="icon-md fa-solid fa-chevron-left"></i>
                        </a>

                        <a
                            className={
                                tabState.showRight ? 'indicator indicator--right' : 'indicator indicator--right hidden'
                            }
                            onClick={() => scrollTabs(false)}
                        >
                            <i className="icon-md fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </TabList>
            </div>

            {tabs.map((tabPanelItem, index) => (
                <TabPanel key={index}>{tabPanelItem.tabContent}</TabPanel>
            ))}
        </Tabs>
    );
};

export default TabsComponent;
