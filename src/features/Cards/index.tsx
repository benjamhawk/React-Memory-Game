import React from 'react'
import { useDispatch } from 'react-redux'
import { useSetImageMap, useLoadedImages } from '../../lib/customHooks'
import { Card, Img, CardContainer, LoadingText } from './styled-components'
import { selectImage } from './cardsSlice'
import {
  useSelectedImages,
  useMatchesFound,
  useImages
} from '../../lib/customHooks/globalStateHooks'
import { Spinner } from 'react-bootstrap'

export default () => {
  const dispatch = useDispatch()
  const selectedImages = useSelectedImages()
  const matchesFound = useMatchesFound()
  // Hooks to direct game flow
  const images = useImages()
  const imageMap = useSetImageMap()

  // Misc hooks
  const { loadedImages, setLoadedImages } = useLoadedImages()

  // Util Functions
  const onCardClick = (index: number) => {
    if (index !== selectedImages.first || selectedImages.second !== -1) {
      dispatch(selectImage(index))
    }
  }

  const onImageLoad = () => {
    setLoadedImages(loadedImages => loadedImages + 1)
  }

  const imageElements = images.map(({ name }, index) => (
    <Card
      key={index}
      onClick={() => onCardClick(index)}
      isHidden={matchesFound.includes(name)}
      isLoaded={loadedImages >= images.length}>
      <Img
        src={imageMap[name]}
        key={index}
        isSelected={
          selectedImages.first === index || selectedImages.second === index
        }
        isHidden={matchesFound.includes(name)}
        draggable={false}
        onLoad={() => onImageLoad()}
      />
    </Card>
  ))

  return (
    <CardContainer>
      {imageElements}
      {loadedImages < images.length && <Spinner animation="border" />}
    </CardContainer>
  )
}
