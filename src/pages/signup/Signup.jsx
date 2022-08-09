// styles
import styles from './Signup.module.css';

// hooks
import { useState, useEffect } from 'react';
import { useSignup } from '../../hooks/useSignup';

// router
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const { signup, isPending, error } = useSignup();

  const navigate = useNavigate();

  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  }, [confirmPassword, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordError) {
      signup(firstName, lastName, email, password);
    }
  };

  return (
    <form action="" className={styles.signupForm} onSubmit={(e) => handleSubmit(e)}>
      <h2>Sign Up!</h2>
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        name="first-name"
        id="first-name"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        required
      />
      <label htmlFor="last-name">Last Name:</label>
      <input
        type="text"
        name="last-name"
        id="last-name"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <label htmlFor="confirm-password">Confirm Password:</label>
      <input
        type="password"
        name="confirm-password"
        id="confirm-password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        required
      />
      {passwordError && <span>password must match!</span>}

      {!isPending && <button className="btn">Sign Up</button>}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};
export default Signup;
