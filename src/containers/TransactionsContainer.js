import React from 'react'
import { connect } from 'react-redux'
import { compose, withState, withHandlers } from 'recompose'

import { Button } from '@material-ui/core'
import TransactionModal from '../components/transaction-modal/TransactionModal'
import TransactionsTable from '../components/transactions-table/TransactionsTable'
import EditTransaction from '../components/edit-transaction/EditTransaction'
import BlockSum from '../components/block-sum/BlockSum'

import {
  setTransaction,
  setChangeTransaction,
  setDeleteTransaction,
  setOpenTransaction,
} from '../actions/main'

const TransactionsContainer = ({
  onSwitchModal,
  isOpenModal,
  onSetTransaction,
  listTransactions,
  onSetOpenTransaction,
  onSetChangeTransaction,
  onSetDeleteTransaction,
  openedTransaction,
  onClearOpenedTransaction,
}) => {
  return (
    <div>
      <Button onClick={onSwitchModal} variant="contained" color="primary">
        Добавить
      </Button>
      <BlockSum listTransactions={listTransactions} />
      {isOpenModal && (
        <TransactionModal
          onSetTransaction={onSetTransaction}
          onSwitchModal={onSwitchModal}
        />
      )}
      {openedTransaction && (
        <EditTransaction
          transaction={openedTransaction}
          onChangeTransaction={onSetChangeTransaction}
          onDeleteTransaction={onSetDeleteTransaction}
          onClose={onClearOpenedTransaction}
        />
      )}
      <TransactionsTable
        onOpenTransaction={onSetOpenTransaction}
        listTransactions={listTransactions}
      />
    </div>
  )
}

const enhance = compose(
  connect(
    ({ main }) => ({
      listTransactions: main.listTransactions,
      openedTransaction: main.openedTransaction,
    }),
    dispatch => ({
      onSetTransaction: transaction => dispatch(setTransaction(transaction)),
      onSetChangeTransaction: transaction =>
        dispatch(setChangeTransaction(transaction)),
      onSetDeleteTransaction: id => dispatch(setDeleteTransaction(id)),
      onSetOpenTransaction: transaction =>
        dispatch(setOpenTransaction(transaction)),
    })
  ),
  withState('isOpenModal', 'onSwitchModal', false),
  withHandlers({
    onSwitchModal: ({ onSwitchModal, isOpenModal }) => () =>
      onSwitchModal(!isOpenModal),
    onClearOpenedTransaction: ({ onSetOpenTransaction }) => () =>
      onSetOpenTransaction(null),
    onSetChangeTransaction: ({
      onSetChangeTransaction,
      onSetOpenTransaction,
    }) => t => {
      onSetOpenTransaction(null)
      onSetChangeTransaction(t)
    },
    onSetDeleteTransaction: ({
      onSetDeleteTransaction,
      onSetOpenTransaction,
    }) => id => {
      onSetOpenTransaction(null)
      onSetDeleteTransaction(id)
    },
  })
)

export default enhance(TransactionsContainer)
