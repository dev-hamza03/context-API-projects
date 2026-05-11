import React, { useContext, useState } from 'react'
import UserContext from '../../context/userContext'


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }

    return (
        <div >
            <h2>Login</h2>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='username'
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                />
                <br />
                <br />
                <input type="text" placeholder='password'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <br />
                <br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default Login
