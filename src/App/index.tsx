import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { useSelector, shallowEqual } from 'react-redux'
import { animalTheme, carTheme } from '../features/theme/themes'
import Header from '../components/Header'
import Cards from '../features/Cards'
import { AppContainer } from '../styled-components/AppContainer'
import { AppState } from './ReduxStore'
import TwoPlayerGame from '../features/TwoPlayerGame'

export default () => {
  const theme = useSelector(({ theme }: AppState) => theme, shallowEqual)
  const [isModalShowing, setIsModalShowing] = useState<boolean>(false)
  useEffect(() => {
    setIsModalShowing(true)
  }, [])

  return (
    <ThemeProvider theme={theme === 'animals' ? animalTheme : carTheme}>
      <AppContainer>
        <TwoPlayerGame />
        <Header />
        <Cards />
      </AppContainer>
    </ThemeProvider>
  )
}
