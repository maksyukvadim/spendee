import React from 'react'
import { withProps } from 'recompose'

import Balance from '../balance/Balance'

import './block-sum.css'

const BlockSum = ({ blanceNow, consumption, income }) => {
  const uah = 'UAH'
  return (
    <div className="block_sum">
      <Balance
        name="Текущий баланс кошелька"
        value={blanceNow}
        isPositive={blanceNow > 0}
        currency={uah}
      />
      <Balance name="Общий расход" value={consumption} currency={uah} />
      <Balance name="Общий доход" value={income} isPositive currency={uah} />
    </div>
  )
}

export default withProps(({ listTransactions }) => {
  const blanceNow = listTransactions.reduce((acc, item) => acc + item.value, 0)

  const consumption = listTransactions.reduce(
    (acc, item) => (item.value < 0 ? acc + item.value : acc),
    0
  )
  const income = listTransactions.reduce(
    (acc, item) => (item.value > 0 ? acc + item.value : acc),
    0
  )

  return { blanceNow, consumption, income }
})(BlockSum)
