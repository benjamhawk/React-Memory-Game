import React from 'react'
import { AppState } from '../../redux'
import { connect } from 'react-redux'

import { Card } from './styled-components/Card'
import { CardContainer } from './styled-components/CardContainer'
import { Img } from './styled-components/Img'
import { imageMap } from '../../imageData/animals'
import { ImageDataModel, ImageModel } from '../../models/imageData.model'
import { selectImage } from '../../redux/actions/selectImage'


type Props = {
  imageData: ImageDataModel
  selectImage: (index: any) => void
}

function Cards ({ imageData, selectImage }: Props) {
  
  const shuffle = (array: ImageModel): ImageModel => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const onCardClick = (index: number) => {
    selectImage(index)
  }
  
  const shuffledImages: any = shuffle([...imageData.images, ...imageData.images])
  const imageElements: any = shuffledImages.map((image: any, index: number):any =>
    <Card
      key={index}
      onClick={() => onCardClick(index)}
    >
      <Img
        src={imageMap[image.name]}
        key={index}
        isSelected={imageData.selectedImage === index}
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
    imageData: state.images
  }
}

export default connect(mapStateToProps, { selectImage })(Cards)