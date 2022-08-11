// styles
import styles from '../../pages/home/Home.module.css';

// hooks
import { useFirestore } from '../../hooks/useFirestore';

const TransactionList = ({ transactions }) => {
  const { removeDocument } = useFirestore('transactions');
  return (
    <ul className={styles.transactions}>
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p className={styles.name}>{transaction.name}</p>
          <p className={styles.amount}>$ {transaction.amount}</p>
          <button onClick={() => removeDocument(transaction.id)}>X</button>
        </li>
      ))}
    </ul>
  );
};
export default TransactionList;
