import React, { useEffect, useState } from 'react'
import { AppState } from '../../redux'
import { connect } from 'react-redux'

import { Card } from './styled-components/Card'
import { CardContainer } from './styled-components/CardContainer'
import { Img } from './styled-components/Img'
import { imageMap } from '../../imageData/animals'
import { ImageDataModel, ImageModel } from '../../models/imageData.model'
import { selectImage } from '../../redux/actions/selectImage'
import { addMatch } from '../../redux/actions/addMatch'
import imagesReducer from '../../redux/reducers/imagesReducer'


type Props = {
  images: ImageModel,
  selectedImages: {
    first: number | null,
    second: number | null
  }
  selectImage: (index: any) => void,
  addMatch: any
  matchesFound: string[]
}

function Cards ({
  images,
  selectedImages,
  selectImage,
  addMatch,
  matchesFound
}: Props) {
  const [cards, setCards] = useState([...images, ...images])

  useEffect(() => {
    setCards(shuffle(cards))
  }, [])

  useEffect(() => {
    checkIfImgsMatch()
  }, [selectedImages])

  const shuffle = (array: ImageModel): ImageModel => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

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
      ishidden={checkIfCardIsHidden(index)}
    >
      <Img
        src={imageMap[image.name]}
        key={index}
        isSelected={
          selectedImages.first === index
          || selectedImages.second === index
        }
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