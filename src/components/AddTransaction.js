import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      name: name,
      amount: +amount,
    };

    setName("");
    setAmount(0);

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>

      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Transaction Name</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Transaction Name'
          />

          <label htmlFor='amount'>Transaction Amount</label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter Transaction Amount'
          />
        </div>
        <button className='add-btn'>Add Transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
