import React from 'react';
import { connect } from 'react-redux';
import { compose, withState, withHandlers } from 'recompose';

import Button from '../components/button/Button';
import TransactionModal from '../components/transaction-modal/TransactionModal';


const TransactionsContainer = ({onSwitchModal, isOpenModal}) => {
    console.log(isOpenModal);
  return (
    <div>
      <span>TransactionsContainer</span>
      <Button text="Добавить" onPress={onSwitchModal}>
        {
          <img
            src="http://simpleicon.com/wp-content/uploads/plus.png"
            width="10px"
            height="10px"
            alt="asd"
          />
        }
      </Button>

        {isOpenModal && <TransactionModal />}
    </div>
  );
};

const enhance = compose(
    connect(({main}) => ({isOpenButton: main.isOpenButton})),
withState('isOpenModal', 'onSwitchModal', false),
withHandlers({
    onSwitchModal: ({onSwitchModal, isOpenModal}) => () => onSwitchModal(!isOpenModal)
})
);

export default enhance(TransactionsContainer);
