import React, { useState } from 'react'
import { AppState } from '../../redux'
import { connect } from 'react-redux'

import { Card } from './styled-components/Card'
import { CardContainer } from './styled-components/CardContainer'
import { Img } from './styled-components/Img'
import { selectImage } from '../../redux/actions/selectImage'
import { addMatch } from '../../redux/actions/addMatch'
import { CardsProps } from '../../models/CardsComponent'
import { changePlayer } from '../../redux/actions/changePlayer'
import { addPoint } from '../../redux/actions/addPoint'
import { unselectImages } from '../../redux/actions/unselectImages'
import { setMatchTotal } from '../../redux/actions/setMatchTotal'
import { addFeedbackMsg } from '../../redux/actions/addFeedbackMessage'
import { imageMapAnimals } from '../../lib/imageData/animals'
import { imageMapCars } from '../../lib/imageData/cars'

import { useDetermineWinner } from '../../lib/customHooks/useDetermineWinner'
import { useSetMatchTotal } from '../../lib/customHooks/useSetMatchTotal'
import { useProcessTurn } from '../../lib/customHooks/useProcessTurn'
import { useShuffledCards } from '../../lib/customHooks/useShuffledCards'
import { useSetImageMap } from '../../lib/customHooks/useSetImageMap'

function Cards ({
  images,
  selectedImages,
  selectImage,
  unselectImages,
  addMatch,
  setMatchTotal,
  addPoint,
  matchesFound,
  gameData,
  changePlayer,
  addFeedbackMsg,
  theme
}: CardsProps) {
  const [imageMap, setImageMap] = useState(imageMapAnimals)
  const shuffledCards = useShuffledCards(images, gameData.gameId)

  useSetImageMap(theme, setImageMap, imageMapAnimals, imageMapCars)
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
    if (index !== selectedImages.first ||
      selectedImages.second !== -1) {
      selectImage(index)
    }
  }

  const checkIfCardIsHidden = (index: number): number => {
    return matchesFound.indexOf(images[index].name)
  }

  const imageElements: any = shuffledCards.map((image: any, index: number): any =>
    <Card
      key={index}
      onClick={() => onCardClick(index)}
      isHidden={checkIfCardIsHidden(index) !== -1}
    >
      {/* {console.log(images)} */}
      <Img
        src={imageMap[image.name]}
        key={index}
        isSelected={
          selectedImages.first === index ||
          selectedImages.second === index
        }
        isHidden={checkIfCardIsHidden(index)}
        draggable={false}
      />
    </Card>
  )

  return (
    <CardContainer>
      {imageElements}
    </CardContainer>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    images: state.imageData.images,
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
  addFeedbackMsg
})(Cards)
