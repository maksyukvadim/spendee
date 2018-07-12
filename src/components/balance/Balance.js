import React from 'react'

import './balance.css'

const Balance = ({ name, value, currency, isPositive = false }) => (
  <div className="balance__card">
    <span className="balance__card_name">{name}</span>
    <span
      className={`balance__card_value ${
        isPositive ? 'positive_value' : 'negative'
      }`}
    >{`${value} ${currency}`}</span>
  </div>
)

export default Balance
