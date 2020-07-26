import React from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector, shallowEqual } from 'react-redux'
import { animalTheme, carTheme } from './themes'
import Header from './components/Header'
import Cards from './components/Cards'
import { AppContainer } from './styled-components/AppContainer'
import { AppState } from './redux'

import './App.css'

export default () => {
  const theme = useSelector(({ theme }: AppState) => theme, shallowEqual)

  return (
    <ThemeProvider theme={theme === 'animals' ? animalTheme : carTheme}>
      <AppContainer>
        <Header />
        <Cards />
      </AppContainer>
    </ThemeProvider>
  )
}
