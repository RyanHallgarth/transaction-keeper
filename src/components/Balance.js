import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    const amountArray = transactions.map(transaction => (transaction.amount));

    const balance = amountArray.reduce((acc, num) => (acc += num), 0).toFixed(2);

    return (
        <div>
            <h2>Your Balance</h2>
            <h1>{balance}</h1>
        </div>
    )
}

export default Balance
