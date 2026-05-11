import React from 'react'
import UserContextProvider from './context/userContextProvider'
import Login from './assets/components/Login'
import Profile from './assets/components/Profile'


const App = () => {
  return (
    <UserContextProvider>
      <h1>This is App component</h1>
      <br />
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
