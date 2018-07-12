import React from 'react'
import { withHandlers } from 'recompose'

import TextIcon from '../text-icon/TextIcon'

import ListItem from '@material-ui/core/ListItem'
const MultiSelectItem = ({ activeCategory, name, icon, onActive }) => {
  return (
    <ListItem key={name} onClick={onActive} button>
      <TextIcon icon={icon} name={name} />
    </ListItem>
  )
}

export default withHandlers({
  onActive: ({ setCategory, name, icon, switchOpened }) => e => {
    switchOpened()
    setCategory({ name, icon })
  },
})(MultiSelectItem)
