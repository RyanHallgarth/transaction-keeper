import React from 'react'


const Transaction = ({ transaction }) => {


    return (
        <li>
            {transaction.name}
            {transaction.amount}
        </li>
    )
}

export default Transaction
