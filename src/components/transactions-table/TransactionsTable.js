import React from 'react';

import{ TableCell, TableRow, TableBody, Table} from '@material-ui/core';

import TextIcon from  '../../components/text-icon/TextIcon'

import { checkDate } from '../../helpers/utils';

const TransactionsTable = ({listTransactions, onOpenTransaction}) => {

    return (
        <div className='transactions-table'>
            <Table>
                <TableBody>
                    {listTransactions.map((n) => {
                        return (
                            <TableRow key={n.id} hover onClick={() => onOpenTransaction(n)}>
                                <TableCell component="th" scope="row">
                                    <TextIcon {...n.category} />
                                </TableCell>
                                {console.log()}
                                <TableCell numeric>{checkDate(n.date).format("MMM Do YY")} <br/> <span>{checkDate(n.date).fromNow()}</span></TableCell>
                                <TableCell numeric>{n.description}</TableCell>
                                <TableCell numeric> --- </TableCell>
                                <TableCell numeric> --- </TableCell>
                                <TableCell numeric>{n.value}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
};

export default TransactionsTable;
