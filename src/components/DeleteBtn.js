import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const DeleteBtn = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <button
        className='delete-btn'
        onClick={() => deleteTransaction(transaction.id)}
      >
        <i className='fas fa-trash-alt fa-lg'></i>
      </button>
    </div>
  );
};

export default DeleteBtn;
