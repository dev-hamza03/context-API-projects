import React from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <div style={{ textAlign: 'center' }} >
      <UserContextProvider>
        This project is for practice of context API
        <br />
        <br />
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App
