import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useImages, useGameId } from './globalStateHooks'
import { setMatchTotal } from '../../features/TwoPlayerGame/twoPlayerGameSlice'

export const useSetMatchTotal = () => {
  const dispatch = useDispatch()
  const imagesLength = useImages().length
  const gameId = useGameId()
  useEffect(() => {
    dispatch(setMatchTotal(imagesLength / 2))
  }, [setMatchTotal, imagesLength, gameId])
}
