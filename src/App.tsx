import React from 'react'
import './App.css'
import { AppContainer } from './styled-components/AppContainer'
import { ThemeProvider } from 'styled-components'
import { animalTheme, carTheme } from './themes'
import Header from './components/Header'
import Cards from './components/Cards'
import { connect } from 'react-redux'
import { AppState } from './redux'

function App ({ theme }: { theme: string }) {
  return (
    <ThemeProvider
      theme={theme === 'animals' ? animalTheme : carTheme}>
      <AppContainer>
        <Header />
        <Cards />
      </AppContainer>
    </ThemeProvider>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme
  }
}

export default connect(mapStateToProps)(App)
