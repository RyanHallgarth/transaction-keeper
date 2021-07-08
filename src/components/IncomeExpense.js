import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpense = () => {

    const { transactions } = useContext(GlobalContext);

    const amountArray = transactions.map((transaction) => transaction.amount);

    const income = amountArray
    .filter((num) => num > 0 )
    .reduce((acc, num) => (acc += num), 0)
    .toFixed(2);

    const expense = amountArray
    .filter((num) => num < 0 )
    .reduce((acc, num) => (acc += num), 0)
    .toFixed(2);
  








    return (
        <div className="inc-exp-container">
            <div>
                <h2>Income</h2>
                <h2>{income}</h2>
            </div>
            <div>
                <h2>Expense</h2>
                <h2>{expense}</h2>
            </div>
            
        </div>
    )
}

export default IncomeExpense
