'use client'

import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import React from 'react';

interface Column {
    header: string;
    accessor: string;
    render?: (row: any) => React.ReactNode;
    clickable?: boolean;
}

interface GenericTableProps {
    columns: Column[];
    data: any[];
    onRowClick?: (row: any) => void;
    title: string;
}

const GenericTable: React.FC<GenericTableProps> = ({ title, columns, data, onRowClick }) => {
    return (
        <div>
            <h5 className="text-2xl pl-2 py-2 font-bold">{title}</h5>
            <Table hoverable striped>
                <TableHead>
                    {columns.map((column, index) => (
                        <TableHeadCell key={index} >
                            {column.header}
                        </TableHeadCell>
                    ))}
                </TableHead>
                <TableBody className="divide-y">
                    {data.map((row, rowIndex) => (
                        <TableRow key={rowIndex} className="cursor-pointer">
                            {columns.map((column, colIndex) => (
                                <TableCell key={colIndex} onClick={() => column.clickable && onRowClick && onRowClick(row)}>
                                    {column.render ? column.render(row) : row[column.accessor]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default GenericTable;