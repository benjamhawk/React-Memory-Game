import { useState, useEffect } from 'react'
import { shuffle } from '../shuffle'
import { ImageModel } from '../../models'

export const useShuffledCards = (images: ImageModel, gameId: number) => {
  const [cards, setCards] = useState(images)

  useEffect(() => {
    setCards(shuffle(images))
  }, [setCards, images, gameId])
  return cards
}
