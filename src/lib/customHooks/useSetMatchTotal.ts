import { useEffect } from 'react'

export const useSetMatchTotal = (
  setMatchTotal: Function,
  imagesLength: number,
  gameId: number
) => {
  useEffect(() => {
    setMatchTotal(imagesLength)
  }, [setMatchTotal, imagesLength, gameId])
}
