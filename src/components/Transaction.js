import React from 'react'

const Transaction = ({ transaction }) => {
    return (
        <li>
            <p>{transaction.name}</p>
            <p>{transaction.amount}</p>
        </li>
    )
}

export default Transaction
