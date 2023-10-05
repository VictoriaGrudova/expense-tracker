import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

function TransactionList() {
  const {transactions, setData} = useContext(GlobalContext);

  function deleteItem(id) {
    const updatedData = transactions.filter(item => item.id !== id);
    setData((prevData) => ({
      ...prevData,
      transactions: updatedData
    }))
  }

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {
          transactions.map(item =>         
            <li key={item.id} className={item.amount > 0 ? "plus" : "minus"}>
            {item.text} <span>{item.amount > 0 ? '+' : '-'}${Math.abs(item.amount)}</span><button onClick={() => deleteItem(item.id)} className="delete-btn">x</button>
            </li>
        )}
      </ul>
    </>
  )
}

export default TransactionList