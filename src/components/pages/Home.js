import React from 'react'
import Balance from '../Balance';
import IncomeExpense from '../IncomeExpense';
import TransactionList from '../TransactionList';
import AddTransaction from '../AddTransaction';

const Home = () => {
    return (
        <div>
            <Balance />
            <IncomeExpense />
            <TransactionList />
            <AddTransaction />
        </div>
    )
}

export default Home
