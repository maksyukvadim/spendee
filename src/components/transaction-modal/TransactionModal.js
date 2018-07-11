import React from "react";
import { compose, withState, withHandlers } from "recompose";

import { Button, Select, MenuItem, Dialog } from "@material-ui/core";
import { AccessAlarm } from "@material-ui/icons";
import Modal from "../modal/Modal";

const TransactionModal = ({ onSwitchModal, isOpenModal }) => {
  return (
    <Modal onClose={onSwitchModal}>

      <Select value={30}>
        <MenuItem value={30}>
          <AccessAlarm />
        </MenuItem>
        <MenuItem value={1}>2</MenuItem>
        <MenuItem value={2}>3</MenuItem>
        <MenuItem value={3}>4</MenuItem>
      </Select>


    </Modal>
  );
};

const enhance = compose(
  withState("transaction", "setTransactionParam", {}),
  withHandlers({
    setTransactionParam: ({ setTransactionParam, transaction }) => param =>
      setTransactionParam({ ...transaction, ...param }),
    onSaveTransaction: ({ transaction, onSaveTransaction }) => () =>
      onSaveTransaction(transaction)
  })
);

export default enhance(TransactionModal);
