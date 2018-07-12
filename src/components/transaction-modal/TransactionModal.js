import React from 'react'
import { compose, withHandlers } from 'recompose'

import 'react-datepicker/dist/react-datepicker.css'

import { Button } from '@material-ui/core'

import Modal from '../modal/Modal'
import Filters from '../filters/Filters'

import { validationTransaction } from '../../helpers/validation'

import './transaction-modal.css'

const TransactionModal = ({
  onSwitchModal,
  isOpenModal,
  setDate,
  transaction,
  setDescription,
  setValue,
  onSaveTransaction,
}) => {
  return (
    <Modal onClose={onSwitchModal} classNames="transaction_modal">
      <Filters>
        {transaction => (
          <Button
            disabled={!validationTransaction(transaction)}
            onClick={() => onSaveTransaction(transaction)}
          >
            Добавить Транзакцию
          </Button>
        )}
      </Filters>
    </Modal>
  )
}

const enhance = compose(
  withHandlers({
    onSaveTransaction: ({ onSetTransaction, onSwitchModal }) => transaction => {
      if (validationTransaction(transaction)) {
        onSwitchModal()
        onSetTransaction({ ...transaction, id: +new Date() })
      }
    },
  })
)

export default enhance(TransactionModal)
