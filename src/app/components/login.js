"use client"
import React, {useState, useContext} from 'react'
import UserContext from '../context/usercontext'


function Login() {
    const [userName, setUsername] = useState('')
    const [passWord, setPassWord] = useState('')

    const handelSubmit =()=>{

    }
  return (
    <>
      <div>
        <h2>Login</h2>
        <input 
        value={userName}
        onChange={(e)=> setUsername(e.target.value)}
        type='text'
        placeholder='username'
        />
        <input 
        value={passWord}
        onChange={(e)=> setPassWord(e.target.value)}
        type='text'
        placeholder='password'
        />
        <button onClick={handelSubmit}></button>
      </div>
    </>
  )
}

export default Login
