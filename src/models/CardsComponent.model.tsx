import { ImageModel } from './ImageData.model'
import { GameDataModel } from './GameData.model'

export type CardsProps = {
  images: ImageModel,
  selectedImages: {
    first: number,
    second: number
  }
  selectImage: (index: any) => void,
  addMatch: any
  matchesFound: string[],
  gameData: GameDataModel
  changePlayer: () => void
  addPoint: (player: number) => void
}