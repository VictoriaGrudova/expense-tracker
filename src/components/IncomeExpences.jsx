import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function IncomeExpences() {
  const {transactions} = useContext(GlobalContext);
  const amount = transactions.map(item => item.amount);

  const {income, expense} = amount.reduce((acc, item) => {
    if(item > 0) {
      acc.income += item
    }else if(item < 0) {
      acc.expense += item
    }
    return acc
  },{expense:0, income:0});

  return (
    <div className="inc-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">+${income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">-${Math.abs(expense)}</p>
        </div>
    </div>
  )
}

export default IncomeExpences;