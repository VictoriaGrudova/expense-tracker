import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Addtransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const {transactions, setData} = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount
    }

    const updatedTransaction = [...transactions, newTransaction];

    setData((prev) => ({
      ...prev,
    transactions: updatedTransaction
    }))

    setText('');
    setAmount(0)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
            onChange={(e) => setText(e.target.value)} 
            value={text}
            type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input 
            onChange={(e) => setAmount(e.target.value)} 
            value={amount}
            type="number" placeholder="Enter amount..." />
        </div>
        <button className="cta">
          <span>Add transaction</span>
          <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
      </form>
    </>
  )
}

export default Addtransaction;