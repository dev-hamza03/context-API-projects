import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import UserContext from '../context/UserContext';
import { useEffect } from 'react';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const { user, setUser } = useContext(UserContext)

    const handleSubmit = async (e) => {
        e.preventDefault()

        setUser({ username, password })


    }

    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <div>
            <h1>Login</h1>
            <br />
            <form onSubmit={handleSubmit} >
                <input type="text"
                    placeholder='Enter your name'
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
                <br />
                <br />
                <input type="text"
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <br />
                <br />
                <button type='submit'>Click to login</button>
                <br />
                <br />
            </form>
        </div>
    )
}

export default Login
