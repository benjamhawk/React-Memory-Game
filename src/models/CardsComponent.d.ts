import { ImageModel } from './ImageData'
import { GameDataModel } from './GameData'

export type CardsProps = {
  images: ImageModel,
  selectedImages: {
    first: number,
    second: number
  }
  selectImage: (index: any) => void,
  unselectImages: () => void
  addFeedbackMsg: (msg: string) => void
  setMatchTotal: (matchTotal: number) => void
  addMatch: any
  matchesFound: string[],
  gameData: GameDataModel
  changePlayer: () => void
  addPoint: (player: number) => void
}
