import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//Initial State

const initialState = {
    transactions: [
        {
            name: 'beer',
            amount: -12.99,
            id: 1
        },
        {
            name: 'paycheck',
            amount: 1600.00,
            id: 2
        },
        {
            name: 'this',
            amount: 234,
            id: 3
        },
        {
            name: 'that',
            amount: -321,
            id: 4
        }

    ]
}

//Create context
export const GlobalContext = createContext(initialState);


// Provider component -need more research here-
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (

        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );

}
