import React from 'react'
import './App.css';
import { AppContainer } from './styled-components/AppContainer';
import { ThemeProvider } from 'styled-components';
import { animalTheme } from './themes';
import Header from './components/Header'
import Cards from './components/Cards';

function App () {
  return (
    <ThemeProvider
      theme={animalTheme}>
      <AppContainer>
        <Header />
        <Cards />
      </AppContainer>
    </ThemeProvider>
  )
}

export default App;
