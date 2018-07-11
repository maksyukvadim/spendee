import { handleActions } from 'redux-actions';

const initilaState = {
    listTransactions: []
};

export default handleActions({
    SET: (state, action) => ({
    ...state, is: action.payload,
  }),
}, initilaState );