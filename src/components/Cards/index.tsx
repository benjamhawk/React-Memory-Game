import React, { useEffect, useState } from 'react'
import { AppState } from '../../redux'
import { connect } from 'react-redux'

import { Card } from './styled-components/Card'
import { CardContainer } from './styled-components/CardContainer'
import { Img } from './styled-components/Img'
import { imageMapAnimals } from '../../lib/imageData/animals'
import { imageMapCars } from '../../lib/imageData/cars'
import { selectImage } from '../../redux/actions/selectImage'
import { addMatch } from '../../redux/actions/addMatch'
import { shuffle } from '../../lib/shuffle'
import { CardsProps } from '../../models/CardsComponent'
import { changePlayer } from '../../redux/actions/changePlayer'
import { addPoint } from '../../redux/actions/addPoint'
import { unselectImages } from '../../redux/actions/unselectImages'
import { setMatchTotal } from '../../redux/actions/setMatchTotal'
import { addFeedbackMsg } from '../../redux/actions/addFeedbackMessage'

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
  const imageMap = theme === 'animals' ? imageMapAnimals : imageMapCars

  useEffect(() => {
    // setCards(shuffle(cards))
    setMatchTotal(images.length)
  }, [setMatchTotal, images, gameData.gameId, theme])

  useEffect(() => {
    const determineWinner = () => {
      if (gameData.scores.player1 === gameData.scores.player2) {
        addFeedbackMsg({
          msg: 'The Game is a Tie!',
          type: 'neutral'
        })
      } else {
        addFeedbackMsg({
          msg: `Player ${
            gameData.scores.player2 > gameData.scores.player1 ? 2 : 1
          } Wins!`,
          type: 'success'
        })
      }
    }

    if (gameData.matchesLeft === 0) {
      determineWinner()
    }
  }, [gameData.matchesLeft, addFeedbackMsg, gameData.scores])

  useEffect(() => {
    const twoImagesSelected = selectedImages.second !== -1

    const checkIfMatch = () => {
      const isMatch = images[selectedImages.first].name === images[selectedImages.second].name

      if (isMatch) {
        addFeedbackMsg({
          msg: 'It\'s a Match! Go again!',
          type: 'success'
        })
        addMatch(images[selectedImages.first].name)
        addPoint(gameData.currentPlayer)
      } else {
        changePlayer()
        addFeedbackMsg({
          msg: 'Not a Match!',
          type: 'warning'
        })
      }
    }

    const processPlayerTurn = async () => {
      await setTimeout(() => {
        unselectImages()
        checkIfMatch()
      }, 2000)
    }

    if (twoImagesSelected) {
      processPlayerTurn()
    }
  }, [
    selectedImages,
    gameData.currentPlayer,
    images,
    addFeedbackMsg,
    addMatch,
    addPoint,
    changePlayer,
    unselectImages
  ])

  const onCardClick = (index: number) => {
    if (index !== selectedImages.first ||
      selectedImages.second !== -1) {
      selectImage(index)
    }
  }

  const checkIfCardIsHidden = (index: number): number => {
    return matchesFound.indexOf(images[index].name)
  }

  const imageElements: any = images.map((image: any, index: number): any =>
    <Card
      key={index}
      onClick={() => onCardClick(index)}
      isHidden={checkIfCardIsHidden(index) !== -1}
    >
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
