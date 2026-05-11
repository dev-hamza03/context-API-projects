import React from 'react'
import ThemeProvider from './context/themeContextProvider'
import Card from './components/Card'


const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App
