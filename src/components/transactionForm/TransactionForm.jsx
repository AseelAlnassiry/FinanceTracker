// hooks
import { useState, useEffect } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

const TransactionForm = ({uid}) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const { addDocument, state: response } = useFirestore('transactions');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDocument({ uid, name, amount });
  };

  // reset the form fields
  useEffect(() => {
    if (response.success) {
      setName('');
      setAmount('');
    }
  }, [response.success]);

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
          required
        />
        <label htmlFor="transaction-amount">$ Amount:</label>
        <input
          type="number"
          name="transaction-amount"
          id="transaction-amount"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          required
        />

        <button>Add Transaction</button>
      </form>
    </>
  );
};
export default TransactionForm;
