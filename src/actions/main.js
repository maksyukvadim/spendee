import { createAction } from 'redux-actions'

export const setTransaction = createAction(
  'SET_TRANSACTION',
  transaction => transaction
)
export const setChangeTransaction = createAction(
  'SET_CHANGE_TRANSACTION',
  transaction => transaction
)
export const setDeleteTransaction = createAction(
  'SET_DELETE_TRANSACTION',
  id => id
)
export const setOpenTransaction = createAction(
  'SET_OPEN_TRANSACTION',
  transaction => transaction
)
