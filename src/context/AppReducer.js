
// AppReducer accepts current state and action
const AppReducer = (state, action) => {
    // switch accepts the type property of the action object
    // The action is funneled to the proper case
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            // Create new state object with the current state,
            // return altered the new state
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}

export default AppReducer;
