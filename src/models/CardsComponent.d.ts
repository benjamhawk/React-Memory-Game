import { ImageModel } from './ImageData'
import { GameDataModel } from './GameData'
import { FeedbackMsgModel } from './FeedBackMsgModel'

export type CardsProps = {
  images: ImageModel,
  loadedImages: number,
  selectedImages: {
    first: number,
    second: number
  }
  selectImage: (index: any) => void,
  unselectImages: () => void
  incrementLoadedImages: () => void
  addFeedbackMsg: (msg: FeedbackMsgModel) => void
  setMatchTotal: (matchTotal: number) => void
  addMatch: any
  matchesFound: string[],
  gameData: GameDataModel
  changePlayer: () => void
  addPoint: (player: number) => void
  theme: string
}
