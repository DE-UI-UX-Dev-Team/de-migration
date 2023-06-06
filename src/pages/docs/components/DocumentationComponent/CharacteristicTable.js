import React from 'react';

const CharacteristicTable = ({ characteristics }) => {
    const parseContent = (content) => {
        const regex = /\[(.*?)\]/; // Regex to match content within [ ]
        const match = content.match(regex);
        if (match) {
            const characteristic = match[1];
            const description = content.replace(match[0], '').trim();
            return { characteristic, description };
        }
        return { characteristic: '', description: content };
    };

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <strong>Characteristic</strong>
                    </td>
                    <td>
                        <strong>Description</strong>
                    </td>
                </tr>
                {characteristics.map((characteristic, index) => {
                    const { characteristic: charac, description } = parseContent(characteristic.value);
                    return (
                        <tr key={index}>
                            <td>{charac}</td>
                            <td>{description}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default CharacteristicTable;
