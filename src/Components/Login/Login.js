import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../context/Context';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const handleSubmit = ((e)=> {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=> {
      history.push('/')
    }).catch((err)=> {
      alert(err.message)
    })
  })
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to='/signup' style={{color:'#002f34', textDecoration:'none'}}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
