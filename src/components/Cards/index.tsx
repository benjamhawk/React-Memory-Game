import React, { useEffect, useState } from 'react'
import { AppState } from '../../redux'
import { connect } from 'react-redux'

import { Card } from './styled-components/Card'
import { CardContainer } from './styled-components/CardContainer'
import { Img } from './styled-components/Img'
import { imageMap } from '../../imageData/animals'
import { selectImage } from '../../redux/actions/selectImage'
import { addMatch } from '../../redux/actions/addMatch'
import { shuffle } from '../../lib/shuffle'
import { CardsProps } from '../../models/CardsComponent.model'

function Cards ({
  images,
  selectedImages,
  selectImage,
  addMatch,
  matchesFound
}: CardsProps) {
  const [cards, setCards] = useState([...images, ...images])

  useEffect(() => {
    setCards(shuffle(cards))
  }, [])

  useEffect(() => {
    checkIfImgsMatch()
  }, [selectedImages])

  const checkIfImgsMatch = () => {
    if (selectedImages.first !== null && selectedImages.second !== null) {
      if (cards[selectedImages.first].name === cards[selectedImages.second].name) {
        addMatch(cards[selectedImages.first].name)
      }
    }
  }

  const onCardClick = (index: number) => {
    if (index !== selectedImages.first
      || selectedImages.second !== null) {
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
      isHidden={checkIfCardIsHidden(index) === -1 ? false : true }
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
    matchesFound: state.imageData.matchesFound
  }
}

export default connect(mapStateToProps, { selectImage, addMatch })(Cards)