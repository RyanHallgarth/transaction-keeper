import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amountArray = transactions.map((transaction) => transaction.amount);

  const income = amountArray
    .filter((num) => num > 0)
    .reduce((acc, num) => (acc += num), 0)
    .toFixed(2);

  let expense = amountArray
    .filter((num) => num < 0)
    .reduce((acc, num) => (acc += num), 0);

  expense = Math.abs(expense).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div className='income'>
        <h2>Income</h2>
        <h2 className={income > 0 ? "positive" : ""}>${income}</h2>
      </div>
      <div className='expense'>
        <h2>Expense</h2>
        <h2 className={expense > 0 ? "negative" : ""}>${expense}</h2>
      </div>
    </div>
  );
};

export default IncomeExpense;
