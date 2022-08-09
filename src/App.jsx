// router
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// hooks
import { useAuthContext } from './hooks/useAuthContext';

// pages & components
import Home from '../src/pages/home/Home';
import Login from '../src/pages/login/Login';
import Signup from '../src/pages/signup/Signup';
import Navbar from './components/navbar/Navbar';

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {user && <Route path="/" element={<Home />} />}
            {!user && <Route path="/" element={<Navigate to="login" replace />} />}
            {!user && <Route path="login" element={<Login />} />}
            {user && <Route path="login" element={<Navigate to="/" replace />} />}
            {!user && <Route path="signup" element={<Signup />} />}
            {user && <Route path="signup" element={<Navigate to="/" replace />} />}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
