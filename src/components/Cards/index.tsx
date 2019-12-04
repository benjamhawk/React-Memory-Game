import React, { useEffect, useState } from 'react'
import { AppState } from '../../redux'
import { connect } from 'react-redux'

import { Card } from './styled-components/Card'
import { CardContainer } from './styled-components/CardContainer'
import { Img } from './styled-components/Img'
import { imageMap } from '../../lib/imageData/animals'
import { selectImage } from '../../redux/actions/selectImage'
import { addMatch } from '../../redux/actions/addMatch'
import { shuffle } from '../../lib/shuffle'
import { CardsProps } from '../../models/CardsComponent.model'
import { changePlayer } from '../../redux/actions/changePlayer'
import { addPoint } from '../../redux/actions/addPoint'

function Cards ({
  images,
  selectedImages,
  selectImage,
  addMatch,
  addPoint,
  matchesFound,
  gameData,
  changePlayer
}: CardsProps) {
  const [cards, setCards] = useState([...images, ...images])

  useEffect(() => {
    setCards(shuffle(cards))
  }, [])

  useEffect(() => {
    const twoImagesSelected = selectedImages.first !== -1 && selectedImages.second !== -1

    const checkIfMatch = () => {
      const isMatch = cards[selectedImages.first].name === cards[selectedImages.second].name

      if (isMatch) {
        addMatch(cards[selectedImages.first].name)
        addPoint(gameData.currentPlayer)
      }
    }

    const processPlayerTurn = () => {
      if (twoImagesSelected) {
        checkIfMatch()
        changePlayer()
      }
    }

    processPlayerTurn()
  }, [selectedImages.second])

  const onCardClick = (index: number) => {
    if (index !== selectedImages.first
      || selectedImages.second !== -1) {
      selectImage(index)
    }
  }

  const checkIfCardIsHidden = (index: number): number => {
    return matchesFound.indexOf(cards[index].name)
  }

  const imageElements: any = cards.map((image: any, index: number): any =>
    <Card
      key={index}
      onClick={() => onCardClick(index)}
      isHidden={checkIfCardIsHidden(index) === -1 ? false : true}
    >
      <Img
        src={imageMap[image.name]}
        key={index}
        isSelected={
          selectedImages.first === index
          || selectedImages.second === index
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
    gameData: state.gameData
  }
}

export default connect(mapStateToProps, { selectImage, addMatch, changePlayer, addPoint })(Cards)