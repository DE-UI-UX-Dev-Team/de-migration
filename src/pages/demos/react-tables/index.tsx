import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Table, TableRow, TableCell } from '../../../components/Tables/Table';
import { headers, rows } from '../../../config/tablesData';
import { titles } from '../../../local/en/Table/constants';

const App: React.FC = () => {
    return (
        <>
            <Table
                tableClassName="table--layout-fixed"
                title={titles.evenlySpacedTitle}
                tbodyClassName="header-frozen"
            >
                <TableRow trClassName="thead">
                    {headers.map((header, i) => (
                        <TableCell
                            key={i}
                            icon={header.icon}
                            tdTitle={header.tdTitle}
                        />
                    ))}
                </TableRow>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        <TableCell tdTitle={row.planName} />
                        <TableCell tdTitle={row.region} />
                        <TableCell tdTitle={row.term} />
                        <TableCell tdTitle={row.rate} />
                    </TableRow>
                ))}
            </Table>

            <Table
                tableClassName="table--layout-fixed table--transpose"
                title={titles.transposedTitle}
            >
                <TableRow trClassName="thead">
                    {headers.map((header, i) => (
                        <TableCell
                            key={i}
                            icon={header.icon}
                            tdTitle={header.tdTitle}
                        />
                    ))}
                </TableRow>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        <TableCell tdTitle={row.planName} />
                        <TableCell tdTitle={row.region} />
                        <TableCell tdTitle={row.term} />
                        <TableCell tdTitle={row.rate} />
                    </TableRow>
                ))}
            </Table>

            <Table
                title={titles.tableTightlySpacedTitle}
                tbodyClassName="header-frozen"
            >
                <TableRow trClassName="thead">
                    {headers.map((header, i) => (
                        <TableCell
                            key={i}
                            tdTitle={header.tdTitle}
                        />
                    ))}
                </TableRow>
                {rows.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                        <TableCell tdTitle={row.planName} />
                        <TableCell tdTitle={row.region} />
                        <TableCell tdTitle={row.term} />
                        <TableCell tdTitle={row.rate} />
                    </TableRow>
                ))}
            </Table>
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
