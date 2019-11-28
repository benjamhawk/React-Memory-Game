import React from 'react'
import './App.css';
import { AppContainer } from './styled-components/AppContainer';
import { ThemeProvider } from 'styled-components';
import { animalTheme } from './themes';
import { Header } from './components/Header'

function App () {
  return (
    <ThemeProvider
      theme={animalTheme}>
      <AppContainer>
        <Header />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App;
