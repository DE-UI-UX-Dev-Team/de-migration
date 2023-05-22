import React, { Fragment } from 'react';
import TokenExample from './TokenExample';
import CharacteristicTable from '../DocumentationComponent/CharacteristicTable';

const DocumentationComponent = ({ docType, docMeta }) => {
    const findTag = function (item, tagName) {
        return item.tags.find((tag) => tag.tag === tagName);
    };

    const generateId = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-');
    };

    return (
        <Fragment>
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
                                            {findTag(item, 'characteristic') && (
                                                <div className="col mini-table">
                                                    <CharacteristicTable
                                                        characteristics={item.tags.filter(
                                                            (tag) => tag.tag === 'characteristic'
                                                        )}
                                                    />
                                                </div>
                                            )}
                                            <div className="col">
                                                {item.cssVariables && <TokenExample cssVariables={item.cssVariables} />}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    )
                );
            })}
        </Fragment>
    );
};

export default DocumentationComponent;
