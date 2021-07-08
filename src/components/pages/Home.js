import React from 'react'
import Balance from '../Balance';
import IncomeExpense from '../IncomeExpense';
import TransactionList from '../TransactionList';
import AddTransaction from '../AddTransaction';

const Home = () => {
    return (
        <div className="container">
            <div className="top">
                <Balance />

                <IncomeExpense />
            </div>
                <AddTransaction />
            <TransactionList />
            
        </div>
    )
}

export default Home
