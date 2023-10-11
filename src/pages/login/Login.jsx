import { Link } from 'react-router-dom';
import './login.scss'
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {

  const { login } = useContext(AuthContext)

  const handleLogin = () => {
    login()
  }

  return (
    <div className="container-login">
      <div className='login'>
        <div className="card">
          <div className="left">
            <h1>Vite Friends</h1>
            <p>
            Log in to reconnect with friends and share your moments. Join our vibrant community today.
            </p>
            <span>Don't you have an Account?</span>
            <Link to="/register">
              <button>Register Now</button>
            </Link>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form action="">
              <input type="text" placeholder='Username'/>
              <input type="password" placeholder='Password'/>
            <button onClick={handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
