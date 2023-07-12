import React, { useState, useEffect } from 'react';
import $ from 'jquery';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TabProps } from '../../interfaces/Props';

interface TabsProps {
    tabs: TabProps[];
}

const TabsComponent: React.FC<TabsProps> = ({ tabs }) => {
    const [tabIndex, setTabIndex] = useState(0);
    const [tabState, setTabState] = useState({
        showleft: true,
        showright: true,
    });
    const scrollDuration: number = 300;

    return (
        <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
        >
            <TabList
                onScroll={(e) => {
                    const menuWrapperSize = $(e.currentTarget).outerWidth();
                    let menuPosition = $(e.currentTarget).scrollLeft();
                    console.log('test ' + menuPosition);
                    console.log();
                    menuPosition = menuPosition ? menuPosition : 0;
                    const itemSize: any = $('li.react-tabs__tab').outerWidth(true);
                    const menuSize: number = tabs.length * itemSize;
                    let menuInvisibleSize: number = menuSize - (menuWrapperSize ? menuWrapperSize : 0);
                    const menuEndOffset = menuInvisibleSize - 20;
                    let showLeft = false;
                    let showright = false;
                    if (menuPosition <= 20) {
                        showLeft = false;
                        showright = true;
                    } else if (menuPosition < menuEndOffset) {
                        showLeft = true;
                        showright = true;
                    } else if (menuPosition >= menuEndOffset) {
                        showLeft = true;
                        showright = false;
                    }
                    setTabState({
                        showleft: showLeft,
                        showright: showright,
                    });
                }}
            >
                {tabs.map((tabItem) => (
                    <Tab>
                        <i className={tabItem.tabIcon}></i>
                        <span>{tabItem.tabTitle}</span>
                    </Tab>
                ))}
                <div className="indicators">
                    <a
                        className={tabState.showleft ? 'indicator indicator--left' : 'indicator indicator--left hidden'}
                        onClick={(e) => {
                            let parent = e.currentTarget?.parentElement?.parentElement as HTMLElement;
                            let menuPosition = $(parent).scrollLeft();
                            menuPosition = menuPosition ? menuPosition : 0;
                            let menuWrapperSize = $(parent).outerWidth();
                            menuWrapperSize = menuWrapperSize ? menuWrapperSize : 0;
                            $(parent).animate({ scrollLeft: menuPosition - menuWrapperSize }, scrollDuration);
                        }}
                    >
                        <i className="fa-solid fa-chevron-left "></i>
                    </a>

                    <a
                        className={
                            tabState.showright ? 'indicator indicator--right' : 'indicator indicator--right hidden'
                        }
                        onClick={(e) => {
                            let parent = e.currentTarget?.parentElement?.parentElement as HTMLElement;
                            let menuPosition = $(parent).scrollLeft();
                            console.log('test ' + menuPosition);
                            menuPosition = menuPosition ? menuPosition : 0;
                            let menuWrapperSize = $(parent).outerWidth();
                            menuWrapperSize = menuWrapperSize ? menuWrapperSize : 0;
                            $(parent).animate({ scrollLeft: menuPosition + menuWrapperSize }, scrollDuration);
                        }}
                    >
                        <i className="fa-solid fa-chevron-right"></i>
                    </a>
                </div>
            </TabList>

            {tabs.map((tabPanelItem) => (
                <TabPanel>{tabPanelItem.tabContent}</TabPanel>
            ))}
        </Tabs>
    );
};

export default TabsComponent;
