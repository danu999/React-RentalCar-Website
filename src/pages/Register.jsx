import React, { useState } from "react";
import "../styles/register.css";
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(name !== '' && email !== '' && password !== '' && confPassword !== '')
    try {
      await axios.post ('http://localhost:5000/users', {
          name: name,
          email: email,
          password: password,
          confPassword: confPassword
      })
      navigate("/Login")
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg)
      }
    }
  }

  return (
    <div className="auth-form-container">
      <h2>-Register-</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label className="label_input" htmlFor="name">
          Name
        </label>
        <input
          className="input_text_register"
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="Name"
          placeholder="Name"
        />
        <label className="label_input" htmlFor="email">
          Email
        </label>
        <input
          className="input_text_register"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />
        <label className="label_input" htmlFor="password">
          Password
        </label>
        <input
          className="input_text_register"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <label className="label_input" htmlFor="confirmpassword">
          Confirm Password
        </label>
        <input
          className="input_text_register"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
          type="password"
          placeholder="ConfirmPassword"
          id="confirmpassword"
          name="confirmpassword"
        />
        <button onClick = {handleSubmit}className="btn_register" type="submit">
          Register
        </button>
        <p className="MessageError">{msg}</p>
      </form>
    </div>
  );
};
export default Register;
