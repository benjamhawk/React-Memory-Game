import { useEffect } from 'react'
import { ImageModel, ImageDataModel } from '../../models'

export const useProcessTurn = (
  addMatch: Function,
  addPoint: Function,
  addFeedbackMsg: Function,
  unselectImages: Function,
  changePlayer: Function,
  images: ImageModel,
  selectedImages: ImageDataModel['selectedImages'],
  currentPlayer: number
) => {
  useEffect(() => {
    const twoImagesSelected = selectedImages.second !== -1

    const checkIfMatch = () => {
      const isMatch =
        images[selectedImages.first].name === images[selectedImages.second].name

      if (isMatch) {
        addFeedbackMsg({
          msg: 'Correct! Go again!',
          type: 'success'
        })
        addMatch(images[selectedImages.first].name)
        addPoint(currentPlayer)
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
    currentPlayer,
    images,
    addFeedbackMsg,
    addMatch,
    addPoint,
    changePlayer,
    unselectImages
  ])
}
