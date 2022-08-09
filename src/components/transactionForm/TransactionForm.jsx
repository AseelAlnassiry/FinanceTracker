// hooks
import { useState } from 'react';

const TransactionForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      amount
    })
  };

  return (
    <>
      <h3>Add a Transaction</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="transaction-name">Transaction name:</label>
        <input
          type="text"
          name="transaction-name"
          id="transaction0name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="transaction-amount">$ Amount:</label>
        <input
          type="number"
          name="transaction-amount"
          id="transaction-amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />

        <button>Add Transaction</button>
      </form>
    </>
  );
};
export default TransactionForm;
