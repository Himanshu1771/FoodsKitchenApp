import React from "react";
import '../css/Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Login Page</h2>
      <div className="login">
        <form id="login" method="get" action="login.php">
          <label>
            <b>User Name</b>
          </label>
          <br/>
          <input type="text" name="Uname" id="Uname" placeholder="Username" />
          <br/>
          <label>
            <b>Password</b>
          </label>
          <br/>
          <input type="Password" name="Pass" id="Pass" placeholder="Password" />
          <br/>
          <button type="submit" id="log" onClick={() => navigate("/")}>Login</button>
          
        </form>
      </div>
    </div>
  );
};

export default Login;
