import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import TabsComponent from '../../../components/Tabs/TabsComponent';
import { tabData, tabDataWithIcon, tabDataBilling, tabDataColumns } from '../../../config/tabData';
import '../../../styles/main.scss';
import ColContentComponent from '../../../components/ColContent/ColContentComponent';
import ImageContentComponent from '../../../components/ImageContent/ImageContentComponent';
import { tabTitles, tabBlockContent } from '../../../local/Tabs/constants';

const App: React.FC = () => {
    return (
        <div>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col fs--text-center">
                            <h2> 1. {tabTitles.TabHorizontal1}</h2>
                        </div>
                    </div>
                    <div>
                        <TabsComponent
                            tabs={tabDataWithIcon}
                            tabContent={ImageContentComponent}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col fs--text-center">
                            <h2> 2. {tabTitles.TabHorizontal2} </h2>
                        </div>
                    </div>
                    <div>
                        <TabsComponent
                            tabs={tabData}
                            tabContent={ImageContentComponent}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row accordion--faq accordion--border-btm">
                        <div className="col fs--text-center">
                            <h2> 3. {tabTitles.TabVertical1}</h2>
                        </div>
                    </div>
                    <div className="tabs--vertical">
                        <TabsComponent
                            tabs={tabData}
                            tabContent={ImageContentComponent}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row accordion--faq accordion--border-btm">
                        <div className="col fs--text-center">
                            <h2> 4. {tabTitles.TabVertical2}</h2>
                        </div>
                    </div>
                    <div className="tabs--vertical">
                        <TabsComponent
                            tabs={tabDataWithIcon}
                            tabContent={ImageContentComponent}
                        />
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col fs--text-center">
                            <h2> 5. {tabTitles.TabColumns}</h2>
                        </div>
                    </div>
                    <div className="tabs--block bg-inner--white-base">
                        <div>
                            <div className="text-block fs--text-center">
                                <h3> {tabBlockContent.utilityBlockHead}</h3>
                                <p>{tabBlockContent.ultilityBlockPara}</p>
                            </div>
                        </div>
                        <div>
                            <TabsComponent
                                tabs={tabDataColumns}
                                tabContent={ColContentComponent}
                            />
                            ;
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-outer--tertiary-base">
                <div className="container">
                    <div className="tabs--block bg-inner--white-base">
                        <div>
                            <div className="text-block fs--text-center">
                                <h3> {tabBlockContent.utilityBlockHead}</h3>
                                <p>{tabBlockContent.ultilityBlockPara}</p>
                            </div>
                        </div>
                        <div>
                            <TabsComponent
                                tabs={tabDataColumns}
                                tabContent={ColContentComponent}
                            />
                            ;
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col fs--text-center">
                            <h2> 6. {tabTitles.TabBilling}</h2>
                        </div>
                    </div>
                    <div className="tabs--block">
                        <div className="row">
                            <div className="text-block fs--text-center">
                                <h3> {tabBlockContent.billingBlockHead}</h3>
                                <p>{tabBlockContent.billingBlockPara}</p>
                            </div>
                        </div>
                        <div>
                            <TabsComponent
                                tabs={tabDataBilling}
                                tabContent={ColContentComponent}
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
                                <h3> {tabBlockContent.billingBlockHead}</h3>
                                <p>{tabBlockContent.billingBlockPara}</p>
                            </div>
                        </div>
                        <div>
                            <TabsComponent
                                tabs={tabDataBilling}
                                tabContent={ColContentComponent}
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
