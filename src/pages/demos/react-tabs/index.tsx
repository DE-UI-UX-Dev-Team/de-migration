import $ from 'jquery';
import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactDOM from 'react-dom';
import TabsComponent from '../../../components/Tabs/TabsComponent';
import { tabData, tabDataWithIcon, tabDataWithBlockColumns, tabDataWithBlock } from '../../../config/tabData';
import ImageLeftContentRight from '../../../components/ImageContent/ImageLeftContentRight';

import '../../../styles/main.scss';
import TabContent4Column from '../../../components/TabContent4Column/TabContent4Column';
import TabContentColumn from '../../../components/TabContent4Column/TabContentColumn';
import ImageLeftContentRightGroup from '../../../components/ImageContent/ImageLeftContentRightGroup';
import ParaGroup from '../../../components/ParaComponent/ParaGroup';

const App: React.FC = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row accordion--faq accordion--border-btm">
                        <div className="col fs--text-center">
                            <h2> 1. HorizontalTabs With Icon</h2>
                        </div>
                    </div>
                    <div>
                        <TabsComponent
                            tabs={tabDataWithIcon}
                            tabContent={ImageLeftContentRightGroup}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row accordion--faq accordion--border-btm">
                        <div className="col fs--text-center">
                            <h2> 2. HorizontalTabs Without Icon</h2>
                        </div>
                    </div>
                    <div>
                        <TabsComponent
                            tabs={tabData}
                            tabContent={ImageLeftContentRightGroup}
                        />
                    </div>
                </div>
            </section>

            <section className="bg-outer--tertiary-base">
                <div className="container">
                    <div className="tabs--block bg-inner--white-base">
                        <div>
                            <div className="text-block fs--text-center">
                                <h3> How Do We Calculate Your Average Bill: An Example</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                                    Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                                    Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit
                                    amet, consectetur adipiscing elit.{' '}
                                </p>
                            </div>
                        </div>
                        <div>
                            <TabsComponent
                                tabs={tabDataWithBlockColumns}
                                tabContent={TabContent4Column}
                            />
                            ;
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row accordion--faq accordion--border-btm">
                        <div className="col fs--text-center">
                            <h2> 3. Vertical Tabs Without Icon</h2>
                        </div>
                    </div>
                    <div className="tabs--vertical">
                        <TabsComponent
                            tabs={tabData}
                            tabContent={ImageLeftContentRightGroup}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row accordion--faq accordion--border-btm">
                        <div className="col fs--text-center">
                            <h2> 4. Vertical Tabs With Icon</h2>
                        </div>
                    </div>
                    <div className="tabs--vertical">
                        <TabsComponent
                            tabs={tabDataWithIcon}
                            tabContent={ImageLeftContentRightGroup}
                        />
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col fs--text-center">
                            <h2> 5. Horizontal Tabs With Text Block</h2>
                        </div>
                    </div>
                    <div className="tabs--block">
                        <div className="row">
                            <div className="text-block fs--text-center">
                                <h3> How Do We Calculate Your Average Bill: An Example</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                                    Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                                    Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit
                                    amet, consectetur adipiscing elit.{' '}
                                </p>
                            </div>
                        </div>
                        <div>
                            <TabsComponent
                                tabs={tabDataWithBlock}
                                tabContent={ParaGroup}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-outer--tertiary-base">
                <div className="container">
                    <div className="tabs--block bg-inner--white-base">
                        <div>
                            <div className="text-block fs--text-center">
                                <h3> How Do We Calculate Your Average Bill: An Example</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
                                    Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                                    Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit
                                    amet, consectetur adipiscing elit.{' '}
                                </p>
                            </div>
                        </div>
                        <div>
                            <TabsComponent
                                tabs={tabDataWithBlock}
                                tabContent={ParaGroup}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
