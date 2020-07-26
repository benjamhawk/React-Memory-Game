import React from 'react'
import { AppState } from '../../redux'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { imageMapAnimals } from '../../lib/imageData/animals'
import { imageMapCars } from '../../lib/imageData/cars'
import { selectImage } from '../../redux/actions'
import {
  useShuffledCards,
  useSetImageMap,
  useSetMatchTotal,
  useDetermineWinner,
  useProcessTurn,
  useLoadedImages
} from '../../lib/customHooks'
import { Card, Img, CardContainer, LoadingText } from './styled-components'

export default () => {
  // Redux state hooks
  const {
    imageData: { matchesFound, images, selectedImages },
    gameData: { gameId, matchesLeft, scores, currentPlayer },
    theme
  } = useSelector((state: AppState) => state, shallowEqual)
  const dispatch = useDispatch()

  // Hooks to direct game flow
  const shuffledCards = useShuffledCards(images, gameId)
  const imageMap = useSetImageMap(theme, imageMapAnimals, imageMapCars)
  useSetMatchTotal(images.length / 2, gameId)
  useDetermineWinner(matchesLeft, scores)
  useProcessTurn(images, selectedImages, currentPlayer)

  // Misc hooks
  const { loadedImages, setLoadedImages } = useLoadedImages(theme)

  // Util Functions
  const onCardClick = (index: number) => {
    if (index !== selectedImages.first || selectedImages.second !== -1) {
      dispatch(selectImage(index))
    }
  }

  const checkIfCardIsHidden = (index: number): number => {
    return matchesFound.indexOf(images[index].name)
  }

  const onImageLoad = () => {
    setLoadedImages(loadedImages => loadedImages + 1)
  }

  const imageElements = shuffledCards.map((image, index) => (
    <Card
      key={index}
      onClick={() => onCardClick(index)}
      isHidden={checkIfCardIsHidden(index) !== -1}
      isLoaded={loadedImages >= shuffledCards.length}>
      <Img
        src={imageMap[image.name]}
        key={index}
        isSelected={
          selectedImages.first === index || selectedImages.second === index
        }
        isHidden={checkIfCardIsHidden(index)}
        draggable={false}
        onLoad={() => onImageLoad()}
      />
    </Card>
  ))

  return (
    <CardContainer>
      {imageElements}
      <LoadingText>
        {loadedImages < shuffledCards.length
          ? 'Loading Cards. This may take a few seconds...'
          : ''}
      </LoadingText>
    </CardContainer>
  )
}
