import React from "react";
import DeleteBtn from "./DeleteBtn";

const Transaction = ({ transaction }) => {
  return (
    <div className='list-item'>
      <DeleteBtn transaction={transaction} />
      <li
        className={
          transaction.amount > 0
            ? "pos-border"
            : transaction.amount < 0
            ? "neg-border"
            : ""
        }
      >
        <p>{transaction.name}</p>
        <p>{transaction.amount}</p>
      </li>
    </div>
  );
};

export default Transaction;
