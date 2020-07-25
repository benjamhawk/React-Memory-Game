import { ImageModel } from './ImageData'
import { GameDataModel } from './GameData'
import { FeedbackMsgModel } from './FeedBackMsgModel'
import { ThemeModel } from './ThemeModel'
import {
  unselectImages,
  incrementLoadedImages,
  addFeedbackMsg,
  addMatch,
  changePlayer,
  addPoint
} from '../redux/actions'

export type CardsProps = {
  images: ImageModel
  loadedImages: number
  selectedImages: {
    first: number
    second: number
  }
  selectImage: typeof selectImage
  unselectImages: typeof unselectImages
  incrementLoadedImages: typeof incrementLoadedImages
  addFeedbackMsg: typeof addFeedbackMsg
  setMatchTotal: typeof setMatchTotal
  addMatch: typeof addMatch
  matchesFound: string[]
  gameData: GameDataModel
  changePlayer: typeof changePlayer
  addPoint: typeof addPoint
  theme: ThemeModel
}
