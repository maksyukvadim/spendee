import React from 'react'
import { compose, withHandlers } from 'recompose'

import 'react-datepicker/dist/react-datepicker.css'

import { Button } from '@material-ui/core'

import Filters from '../filters/Filters'
import Modal from '../modal/Modal'

import { validationTransaction } from '../../helpers/validation'

import './edit-transaction.css'

const EditTransaction = ({
  transaction,
  onChangeTransaction,
  onDeleteTransaction,
  onClose,
}) => {
  return (
    <Modal onClose={onClose} classNames="edit-transaction">
      <Filters transaction={transaction}>
        {transaction => (
          <div>
            <Button onClick={() => onChangeTransaction(transaction)}>
              Изменить Транзакцию
            </Button>
            <Button onClick={() => onDeleteTransaction(transaction)}>
              Удалить Транзакцию
            </Button>
          </div>
        )}
      </Filters>
    </Modal>
  )
}

const enhance = compose(
  withHandlers({
    onChangeTransaction: ({ onChangeTransaction }) => transaction =>
      validationTransaction(transaction)
        ? onChangeTransaction(transaction)
        : () => {},
    onDeleteTransaction: ({ onDeleteTransaction }) => transaction =>
      onDeleteTransaction(transaction.id),
  })
)

export default enhance(EditTransaction)
