import { useEffect } from "react"

export const useSetMatchTotal = (setMatchTotal: any, imagesLength: number, gameId: number) => {
  useEffect(() => {
  setMatchTotal(imagesLength)
}, [setMatchTotal, imagesLength, gameId])
}