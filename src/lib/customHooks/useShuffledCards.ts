import { useState, useEffect } from "react"
import { shuffle } from "../shuffle"

export const useShuffledCards = (images: any, gameId: number) => {
  const [cards, setCards] = useState(images)
  
  useEffect(() => {
    setCards(shuffle(images))
  }, [setCards, images, gameId])
  return cards
}