// styles
import styles from './Home.module.css'

// components
import TransactionForm from '../../components/transactionForm/TransactionForm'

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>transaction list</div>
      <div className={styles.sidebar}>
        <TransactionForm/>
      </div>
    </div>
  )
}
export default Home