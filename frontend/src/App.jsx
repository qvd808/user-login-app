import { useState } from 'react'
import './App.css'
import Axios from 'axios';

function App() {
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const [usernameLog, setUsernameLog] = useState('');
  const [passwordLog, setPasswordLog] = useState('');

  const [loginStatus, setLoginStatus] = useState(false);

  const register = () => {
    Axios.post('http://localhost:5000/register', {
      userName: usernameReg,
      password: passwordReg,
    }).then(response => {
      console.log(response)
    })
  }

  const login = () => {
    Axios.get(`http://localhost:5000/login?` + new URLSearchParams({
      userName: usernameLog,
      password: passwordLog
    }), {
    }).then(response => {
      console.log(response.data)
      if (response.data.message) {
        setLoginStatus(false)
      } else {
        setLoginStatus(true)
      }
    })
  }

  return (

    <div className="App">
      <div className='registration'>
        <h1>Registrationn</h1>
        <label>Username</label>
        <input type="text" onChange={(e) => {
          setUsernameReg(e.target.value);
        }} />
        <label>Password</label>
        <input type="text"onChange={(e) => {
          setPasswordReg(e.target.value);
        }}/>
        <button onClick = {register}>Register</button>
      </div>




      <div className='login'>
        <h1>Login</h1>
        <input type="text" placeholder='Username...' onChange={(e) => {
          setUsernameLog(e.target.value);
        }}/>
        <input type="text" placeholder='Password...' onChange={(e) => {
          setPasswordLog(e.target.value);
        }}/>
        <button onClick={login}>Login</button>

        {
          loginStatus ? (
            <h1>Login Successfull</h1>
          ) : null
        }
      </div>
    </div>
  )
}

export default App
