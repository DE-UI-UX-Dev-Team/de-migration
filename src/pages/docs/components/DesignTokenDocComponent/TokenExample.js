import React, { useState } from 'react';

const TokenExamples = ({ cssVariables }) => {
    const [copiedToken, setCopiedToken] = useState('');

    const copyToken = (token) => {
        navigator.clipboard.writeText(`var(${token})`);
        setCopiedToken(token);
    };

    return (
        <table className="table--layout-fixed">
            <tbody>
                <tr>
                    <td>
                        <strong>Token</strong>
                    </td>
                    <td>
                        <strong>Value</strong>
                    </td>
                </tr>
                {Object.entries(cssVariables).map(([variable, value]) => {
                    return (
                        <tr key={variable}>
                            <td>
                                <strong>var({variable})</strong>
                                <button
                                    className="display-inline-block btn--tertiary mg-l--15"
                                    onClick={() => copyToken(variable)}
                                    disabled={copiedToken === variable}
                                >
                                    {copiedToken === variable ? 'Copied!' : 'Copy'}
                                </button>
                            </td>
                            <td>{value}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default TokenExamples;
