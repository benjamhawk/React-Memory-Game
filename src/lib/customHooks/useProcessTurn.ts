import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  useSelectedImages,
  useImages,
  useCurrentPlayer
} from './globalStateHooks'
import {
  addMessage,
  addPoint,
  changePlayer
} from '../../features/TwoPlayerGame/twoPlayerGameSlice'
import { addMatch, unselectImages } from '../../features/Cards/cardsSlice'
import { MessageType } from '../../features/TwoPlayerGame/MessageType'

export const useProcessTurn = () => {
  const dispatch = useDispatch()
  const selectedImages = useSelectedImages()
  const images = useImages()
  const currentPlayer = useCurrentPlayer()

  useEffect(() => {
    const twoImagesSelected = selectedImages.second !== -1

    const checkIfMatch = () => {
      const isMatch =
        images[selectedImages.first].name === images[selectedImages.second].name

      if (isMatch) {
        dispatch(
          addMessage({
            msg: 'Correct! Go again!',
            type: MessageType.success
          })
        )
        dispatch(addMatch(images[selectedImages.first].name))
        dispatch(addPoint(currentPlayer))
      } else {
        dispatch(changePlayer())
        dispatch(
          addMessage({
            msg: 'Not a Match!',
            type: MessageType.warning
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
    addMessage,
    addMatch,
    addPoint,
    changePlayer,
    unselectImages
  ])
}
