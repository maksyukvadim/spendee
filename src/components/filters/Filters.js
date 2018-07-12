import React from 'react'
import { compose, withState, withHandlers } from 'recompose'
import moment from 'moment'

import DatePicker from 'react-datepicker'
import { TextField } from '@material-ui/core'

import MultiSelect from '../multi-select/MultiSelect'
import { CATEGORYE_DEFAULT } from '../../constants'

import { checkDate } from '../../helpers/utils'

import './filters.css'

const Filters = ({
  transaction,
  setDescription,
  categoryType,
  setCategoryTypeIncome,
  setCategoryTypeExpense,
  setCategory,
  setDate,
  setValue,
  children,
}) => {
  let { date, description, value, category } = transaction
  date = checkDate(date)
  return (
    <React.Fragment>
      <div className="filter__col">
        <MultiSelect
          categoryType={categoryType}
          setCategoryTypeIncome={setCategoryTypeIncome}
          setCategoryTypeExpense={setCategoryTypeExpense}
          activeCategory={category}
          setCategory={setCategory}
        />
        <div>
          <span className="label">Дата</span>
          <DatePicker selected={date} onChange={setDate} />
        </div>
      </div>

      <div className="filter__col">
        <TextField
          className={`${categoryType > 0 ? 'positive' : 'negative'}`}
          id="value"
          label="Сумма"
          value={value}
          onChange={setValue}
          margin="normal"
          type="number"
        />

        <TextField
          id="description"
          label="Заметка"
          value={description}
          onChange={setDescription}
          margin="normal"
          rows="4"
        />
      </div>

      <div className="filter__col">
        <TextField
          id="currency"
          label="Валюта"
          value="UAH"
          margin="normal"
          disabled
        />
      </div>
      {children(transaction)}
    </React.Fragment>
  )
}

const enhance = compose(
  withState('transaction', 'setTransactionParam', ({ transaction }) => {
    const defaultTransaction = {
      date: moment(),
      description: '',
      value: '',
      category: CATEGORYE_DEFAULT,
    }
    return transaction ? transaction : defaultTransaction
  }),
  withState('categoryType', 'setCategoryType', -1),
  withHandlers({
    setCategoryTypeIncome: ({ setCategoryType, transaction }) => () => {
      transaction.value =
        transaction.value < 0 ? transaction.value * -1 : transaction.value
      setCategoryType(1)
    },
    setCategoryTypeExpense: ({ setCategoryType, transaction }) => () => {
      transaction.value =
        transaction.value > 0 ? transaction.value * -1 : transaction.value
      setCategoryType(-1)
    },
    setDate: ({ setTransactionParam, transaction }) => date =>
      setTransactionParam({ ...transaction, date }),
    setDescription: ({ setTransactionParam, transaction }) => e =>
      setTransactionParam({ ...transaction, description: e.target.value }),
    setValue: ({ setTransactionParam, categoryType, transaction }) => e =>
      setTransactionParam({
        ...transaction,
        value: Math.abs(Number(e.target.value)) * categoryType,
      }),
    setCategory: ({ setTransactionParam, transaction }) => category =>
      setTransactionParam({
        ...transaction,
        category,
      }),
  })
)

export default enhance(Filters)
