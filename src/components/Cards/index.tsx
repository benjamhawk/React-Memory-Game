import React, { valueOf } from 'react'
import styled from 'styled-components'
import { AppState } from '../../redux'
import { connect } from 'react-redux'
import { Card } from './styled-components/Card'
import { CardContainer } from './styled-components/CardContainer'

import elephant from "../../assets/images/animals/elephant.jpg"
import fish from "../../assets/images/animals/fish.jpg"
import cheetah from "../../assets/images/animals/cheetah.jpg"
import fox from "../../assets/images/animals/fox.jpg"
import frog from "../../assets/images/animals/frog.jpg"
import penguin from "../../assets/images/animals/penguin.jpg"
import sheep from "../../assets/images/animals/sheep.jpg"
import walrus from "../../assets/images/animals/walrus.jpg"
import giraffe from "../../assets/images/animals/giraffe.jpg"
import zebra from "../../assets/images/animals/zebra.jpg"
import { Img } from './styled-components/Img'

type Props = {
  images: string[]
}

const imageMap: any = {
  'elephant': elephant,
  'fish': fish,
  'cheetah': cheetah,
  'fox': fox,
  'frog': frog,
  'penguin': penguin,
  'sheep': sheep,
  'walrus': walrus,
  'giraffe': giraffe,
  'zebra': zebra
}


function Cards ({ images }: Props) {
  const shuffle = (array: string[]): any => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  
  const shuffledImages: any = shuffle([...images, ...images])
  const imageElements: any = shuffledImages.map((imageSrc: string, index: number) =>
    <Card
      key={index}
    >
      <Img
        src={imageMap[imageSrc]}
        key={index}
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
    images: state.images
  }
}

export default connect(mapStateToProps)(Cards)