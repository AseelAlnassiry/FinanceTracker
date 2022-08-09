// styles
import styles from './Login.module.css';

// hooks
import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, isPending, error } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className={styles['login-form']} onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label htmlFor="email">email</label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        name="email"
        id="email"
        required
      />

      <label htmlFor="password">password</label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        name="password"
        id="password"
        required
      />
      {!isPending && <button className="btn">Login</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};
export default Login;
