import { TabProps } from '../../interfaces/Props';

// tabScrollHelpers.ts
export const scrollTabs = (tabListRef: React.MutableRefObject<HTMLDivElement | null>, left: boolean) => {
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

export const handleTabScroll = (
    tabs: TabProps<any>[],
    tabListRef: React.MutableRefObject<HTMLDivElement | null>,

    setTabState: React.Dispatch<React.SetStateAction<{ showLeft: boolean; showRight: boolean }>>
) => {
    if (tabListRef.current) {
        const tabListElement = tabListRef.current.querySelector('.react-tabs__tab-list') as HTMLElement;
        const tabMenuOffset: number = 20;
        if (tabListElement) {
            const menuWrapperSize = tabListElement.offsetWidth;
            let menuPosition = tabListElement.scrollLeft;
            menuPosition = menuPosition ? menuPosition : 0;
            const itemElement = tabListElement.querySelector('li.react-tabs__tab') as HTMLLIElement;
            const itemSize = itemElement?.offsetWidth;
            const menuSize: number = tabs.length * itemSize;

            let menuInvisibleSize: number = menuSize - (menuWrapperSize ? menuWrapperSize : 0);
            const menuEndOffset = menuInvisibleSize - tabMenuOffset;
            let showLeft = false;
            let showRight = false;
            if (menuPosition <= tabMenuOffset) {
                showRight = true;
            } else if (menuPosition < menuEndOffset) {
                showLeft = true;
                showRight = true;
            } else {
                showLeft = true;
            }
            setTabState({
                showLeft,
                showRight,
            });
        }
    }
};
