import React, { useContext } from 'react'
import ThemeContext from '../context/themContext'

const Card = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`container ${theme}`} >
      <button onClick={toggleTheme} >Toggle</button>
    </div>
  )
}

export default Card
