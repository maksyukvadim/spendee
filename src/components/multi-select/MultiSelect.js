import React from 'react'
import { withState, compose, withHandlers } from 'recompose'

import { Button, List } from '@material-ui/core'

import MultiSelectItem from './MultiSelectItem'
import Modal from '../modal/Modal'

import { CATEGORYES_EXPENSE, CATEGORYES_INCOME } from '../../constants'
import TextIcon from '../text-icon/TextIcon'

import './multiselect.css'

const MultiSelect = ({
  activeCategory,
  categoryType,
  setCategoryTypeExpense,
  setCategoryTypeIncome,
  setCategory,
  isOpen,
  switchOpened,
}) => {
  const listCategory = categoryType > 0 ? CATEGORYES_INCOME : CATEGORYES_EXPENSE
  return (
    <div className="multiselect">
      <span className="label">Категория</span>
      <div className="multiselect__active" onClick={switchOpened}>
        <TextIcon {...activeCategory} />
      </div>
      {isOpen && (
        <Modal classNames="multiselect__list" onClose={switchOpened}>
          <Button onClick={setCategoryTypeExpense}>Раход</Button>
          <Button onClick={setCategoryTypeIncome}>Доход</Button>
          <List>
            {listCategory.map(item => (
              <MultiSelectItem
                {...item}
                setCategory={setCategory}
                switchOpened={switchOpened}
                key={item.name}
              />
            ))}
          </List>
        </Modal>
      )}
    </div>
  )
}

const enhance = compose(
  withState('isOpen', 'switchOpened', false),
  withHandlers({
    switchOpened: ({ switchOpened, isOpen }) => () => switchOpened(!isOpen),
  })
)

export default enhance(MultiSelect)
