import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = (props) => {
  const { loggedIn, email } = props;
  const navigate = useNavigate();

  const handleUserLoginLogout = () => {
    if (loggedIn) {
      
    } else {
      navigate('/login'); 
    }
  };

  const handleAdminLogin = () => {
    navigate('/adminlogin'); 
  };

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <div>Welcome!</div>
      </div>
      <div>
        <h4>Go green; breathe clean</h4>
      </div>
      <div className="userlo">
        <h1>User Login:</h1>
      </div>
      <div className="buttonContainer">
        <input
          className="inputButton"
          type="button"
          onClick={handleUserLoginLogout}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : null}
      </div>
      <div className="adminlogin">
        <h1>Administrator Login:</h1>
      </div>
      <div className="buttonContainer">
        <input
          className="inputButton"
          type="button"
          onClick={handleAdminLogin}
          value="Login"
        />
      </div>
    </div>
  );
};

export default Home;
