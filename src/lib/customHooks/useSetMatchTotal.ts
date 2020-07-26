import { useEffect } from 'react'
import { setMatchTotal } from '../../redux/actions'
import { useDispatch } from 'react-redux'

export const useSetMatchTotal = (imagesLength: number, gameId: number) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setMatchTotal(imagesLength))
  }, [setMatchTotal, imagesLength, gameId])
}
