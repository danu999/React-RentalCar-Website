import React, { useState } from "react";
import "../styles/login.css";
import axios from "axios"
import { useNavigate } from "react-router-dom"


  const Login = ({setLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  const Auth = async (e) => {
    e.preventDefault()
    if(email !== '' && password !== '')
    try {
      await axios.post ('http://localhost:5000/login', {
          email: email,
          password: password
      })
      setLogin(true)
      navigate("/home")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <div className="auth-form-container">
      <h2>-Login-</h2>
      <form className="login-form" onSubmit = {Auth}>
        <label className="label_input" htmlFor="email">Email</label>
        <input
          className="input_text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />
        <label className="label_input" htmlFor="password">Password</label>
        <input
          className="input_text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button className="btn_login"type="submit" onClick={Auth}>Log In</button>
        <p className="LoginSuccess">{msg}</p>
      </form>
    </div>
  );
};
export default Login;
