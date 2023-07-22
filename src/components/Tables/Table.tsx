import React from 'react';
import { TableCellProps, TableProps, TableRowProps } from '../../interfaces/Props';

export const Table: React.FC<TableProps> = ({ children, tableClassName, title }) => {
    return (
        <section>
            <div className="container">
                <div className="row display-block">
                    <div className="col">
                        <h3>{title}</h3>
                        <div className="table--responsive">
                            <table className={tableClassName}>
                                <tbody>{children}</tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const TableRow: React.FC<TableRowProps> = ({ children, trClassName }) => {
    return <tr className={trClassName}>{children}</tr>;
};

export const TableCell: React.FC<TableCellProps> = ({ tdTitle, icon }) => {
    return (
        <td>
            {icon && <i className={icon}></i>}
            {tdTitle}
        </td>
    );
};
