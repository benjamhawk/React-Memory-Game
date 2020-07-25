import React, { useState } from 'react'
import { AppState } from '../../redux'
import { connect } from 'react-redux'
import { CardsProps } from '../../models/CardsComponent'
import { imageMapAnimals } from '../../lib/imageData/animals'
import { imageMapCars } from '../../lib/imageData/cars'
import {
  selectImage,
  unselectImages,
  addMatch,
  setMatchTotal,
  changePlayer,
  addPoint,
  addFeedbackMsg,
  incrementLoadedImages
} from '../../redux/actions'
import {
  useShuffledCards,
  useSetImageMap,
  useSetMatchTotal,
  useDetermineWinner,
  useProcessTurn
} from '../../lib/customHooks'
import { Card, Img, CardContainer, LoadingText } from './styled-components'

const Cards = ({
  images,
  loadedImages,
  selectedImages,
  selectImage,
  unselectImages,
  incrementLoadedImages,
  addMatch,
  setMatchTotal,
  addPoint,
  matchesFound,
  gameData,
  changePlayer,
  addFeedbackMsg,
  theme
}: CardsProps) => {
  const shuffledCards = useShuffledCards(images, gameData.gameId)
  const imageMap = useSetImageMap(theme, imageMapAnimals, imageMapCars)
  useSetMatchTotal(setMatchTotal, images.length / 2, gameData.gameId)
  useDetermineWinner(addFeedbackMsg, gameData.matchesLeft, gameData.scores)
  useProcessTurn(
    addMatch,
    addPoint,
    addFeedbackMsg,
    unselectImages,
    changePlayer,
    images,
    selectedImages,
    gameData.currentPlayer
  )

  const onCardClick = (index: number) => {
    if (index !== selectedImages.first || selectedImages.second !== -1) {
      selectImage(index)
    }
  }

  const checkIfCardIsHidden = (index: number): number => {
    return matchesFound.indexOf(images[index].name)
  }

  const onImageLoad = () => {
    incrementLoadedImages()
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

const mapStateToProps = (state: AppState) => {
  return {
    images: state.imageData.images,
    loadedImages: state.loadedImages,
    selectedImages: state.imageData.selectedImages,
    matchesFound: state.imageData.matchesFound,
    gameData: state.gameData,
    theme: state.theme
  }
}

export default connect(mapStateToProps, {
  selectImage,
  unselectImages,
  addMatch,
  setMatchTotal,
  changePlayer,
  addPoint,
  addFeedbackMsg,
  incrementLoadedImages
})(Cards)
