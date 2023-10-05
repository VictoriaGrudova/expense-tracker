import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

function Balance() {
  const {transactions} = useContext(GlobalContext);
  const amount = transactions.map(item => item.amount);

  const total = amount.reduce((acc,item) => acc += item,0)
 
  return (
    <>
          <h1>${total}</h1>
          <h5>Total balance</h5>
    </>
  )
}

export default Balance;