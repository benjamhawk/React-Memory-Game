import React from 'react'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { animalTheme, carTheme } from './themes'
import { ThemeModel } from './models/'
import Header from './components/Header'
import Cards from './components/Cards'
import { AppContainer } from './styled-components/AppContainer'

import './App.css'
import { AppState } from './redux'

const App = ({ theme }: { theme: ThemeModel }) => {
  return (
    <ThemeProvider theme={theme === 'animals' ? animalTheme : carTheme}>
      <AppContainer>
        <Header />
        <Cards />
      </AppContainer>
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }: AppState) => {
  return { theme }
}

export default connect(mapStateToProps)(App)
