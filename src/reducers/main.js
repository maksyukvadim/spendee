import { handleActions } from 'redux-actions'

const initilaState = {
  listTransactions: [],
  openedTransaction: null,
}

export default handleActions(
  {
    SET_TRANSACTION: (state, action) => ({
      ...state,
      listTransactions: [...state.listTransactions, action.payload],
    }),
    SET_CHANGE_TRANSACTION: (state, action) => ({
      ...state,
      listTransactions: state.listTransactions.map(item => {
        if (item.id === action.payload.id) {
          return action.payload
        }
        return item
      }),
    }),
    SET_DELETE_TRANSACTION: (state, action) => ({
      ...state,
      listTransactions: state.listTransactions.filter(
        item => item.id !== action.payload
      ),
    }),
    SET_OPEN_TRANSACTION: (state, action) => ({
      ...state,
      openedTransaction: action.payload,
    }),
  },
  initilaState
)
