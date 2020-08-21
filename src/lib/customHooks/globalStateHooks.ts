import { useSelector, shallowEqual } from 'react-redux'
import { AppState } from '../../App/ReduxStore'

export const useTheme = () =>
  useSelector(({ theme }: AppState) => theme, shallowEqual)

export const useImages = () =>
  useSelector(({ cards }: AppState) => cards.images, shallowEqual)

export const useGameId = () =>
  useSelector(
    ({ twoPlayerGame }: AppState) => twoPlayerGame.gameId,
    shallowEqual
  )

export const useCurrentPlayer = () =>
  useSelector(
    ({ twoPlayerGame }: AppState) => twoPlayerGame.currentPlayer,
    shallowEqual
  )

export const useMessage = () =>
  useSelector(
    ({ twoPlayerGame }: AppState) => twoPlayerGame.messageDisplay,
    shallowEqual
  )

export const useSelectedImages = () =>
  useSelector(({ cards }: AppState) => cards.selectedImages, shallowEqual)

export const useMatchesFound = () =>
  useSelector(({ cards }: AppState) => cards.matchesFound, shallowEqual)

export const useMatchesLeft = () =>
  useSelector(
    ({ twoPlayerGame }: AppState) => twoPlayerGame.matchesLeft,
    shallowEqual
  )

export const useScores = () =>
  useSelector(
    ({ twoPlayerGame }: AppState) => twoPlayerGame.scores,
    shallowEqual
  )
