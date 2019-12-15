import { useEffect } from "react"

export const useProcessTurn = (
  addMatch: any, 
  addPoint: any, 
  addFeedbackMsg: any, 
  unselectImages: any,
  changePlayer: any,
  images: any,
  selectedImages: any,
  currentPlayer: number
) => {
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