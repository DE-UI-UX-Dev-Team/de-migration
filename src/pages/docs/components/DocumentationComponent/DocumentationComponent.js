import React from 'react';
import CharacteristicTable from './CharacteristicTable';
import RelatedLinksList from './RelatedLinkList';
import IframeControl from './IFrameControl';

const DocumentationComponent = ({ docType, docMeta }) => {
    const findTag = function (item, tagName) {
        return item.tags.find((tag) => tag.tag === tagName);
    };

    const generateId = (title) => {
        return title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    };

    return (
        <div>
            {docMeta.map((section, index) => {
                return (
                    findTag(section[0], 'doc-type').value === docType && (
                        <section
                            className="bdr-bottom"
                            key={index}
                        >
                            <div className="container">
                                {section.map((item, itemIndex) => {
                                    return (
                                        <div
                                            className="row"
                                            key={itemIndex}
                                        >
                                            <div className="col">
                                                <h2 id={generateId(findTag(item, 'title').value)}>
                                                    {findTag(item, 'title').value}
                                                </h2>
                                                <h3 className="fs--italic">{item.description}</h3>
                                                {findTag(item, 'description') && (
                                                    <p>{findTag(item, 'description').value}</p>
                                                )}
                                            </div>

                                            {findTag(item, 'uri-example-iframe') && (
                                                <div className="col">
                                                    <IframeControl
                                                        iframeId={generateId(findTag(item, 'title').value) + '_iframe'}
                                                        iframeSrc={findTag(item, 'uri-example-iframe').value}
                                                    />
                                                </div>
                                            )}

                                            {findTag(item, 'characteristic') && (
                                                <div className="col">
                                                    <CharacteristicTable
                                                        characteristics={item.tags.filter(
                                                            (tag) => tag.tag === 'characteristic'
                                                        )}
                                                    />
                                                </div>
                                            )}

                                            {findTag(item, 'uri-related-links') && (
                                                <div className="col">
                                                    <h5 className="display-inline-block mg-b--0">Related Links:</h5>
                                                    <RelatedLinksList
                                                        relatedLinks={findTag(item, 'uri-related-links').value.split(
                                                            ','
                                                        )}
                                                    />
                                                </div>
                                            )}

                                            <div className="col">
                                                {findTag(item, 'uri-demo-page') && (
                                                    <a
                                                        href={findTag(item, 'uri-demo-page').value}
                                                        target="_blank"
                                                        className="btn--primary"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Demo Page
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )
                );
            })}
        </div>
    );
};

export default DocumentationComponent;
