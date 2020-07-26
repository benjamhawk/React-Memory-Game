import { useEffect } from 'react'
import { ImageModel, ImageDataModel } from '../../models'
import {
  unselectImages,
  addMatch,
  addFeedbackMsg,
  addPoint,
  changePlayer
} from '../../redux/actions'
import { useDispatch } from 'react-redux'

export const useProcessTurn = (
  images: ImageModel,
  selectedImages: ImageDataModel['selectedImages'],
  currentPlayer: number
) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const twoImagesSelected = selectedImages.second !== -1

    const checkIfMatch = () => {
      const isMatch =
        images[selectedImages.first].name === images[selectedImages.second].name

      if (isMatch) {
        dispatch(
          addFeedbackMsg({
            msg: 'Correct! Go again!',
            type: 'success'
          })
        )
        dispatch(addMatch(images[selectedImages.first].name))
        dispatch(addPoint(currentPlayer))
      } else {
        dispatch(changePlayer())
        dispatch(
          addFeedbackMsg({
            msg: 'Not a Match!',
            type: 'warning'
          })
        )
      }
    }

    const processPlayerTurn = async () => {
      await setTimeout(() => {
        dispatch(unselectImages())
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
