import React from 'react'

const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>

            <form>
                <div className="form-control">
                    <label htmlFor="name">Transaction Name</label>
                    <input type="text" placeholder="Transaction Name" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Transaction Amount</label>
                    <input type="number" placeholder="Enter Transaction Amount" />
                </div>
                <button>Enter</button>

            </form>
            
        </div>
    )
}

export default AddTransaction
