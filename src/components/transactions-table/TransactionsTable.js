import React from 'react'
import 'moment/locale/ru'

import { TableCell, TableRow, TableBody, Table } from '@material-ui/core'

import TextIcon from '../../components/text-icon/TextIcon'

import { checkDate } from '../../helpers/utils'

const TransactionsTable = ({ listTransactions, onOpenTransaction }) => {
  const uah = 'UAH'
  return (
    <div className="transactions-table">
      <Table>
        <TableBody>
          {listTransactions.map(n => {
            return (
              <TableRow key={n.id} hover onClick={() => onOpenTransaction(n)}>
                <TableCell component="th" scope="row">
                  <TextIcon {...n.category} />
                </TableCell>
                <TableCell numeric>
                  {checkDate(n.date)
                    .locale('ru')
                    .format('LL')}{' '}
                  <br />{' '}
                  <span className="label">
                    {checkDate(n.date)
                      .locale('ru')
                      .fromNow()}
                  </span>
                </TableCell>
                <TableCell numeric>{n.description}</TableCell>
                <TableCell numeric> --- </TableCell>
                <TableCell numeric> --- </TableCell>
                <TableCell
                  numeric
                  className={`${n.value > 0 ? 'positive_value' : 'negative'}`}
                >
                  {n.value + ' ' + uah}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default TransactionsTable
