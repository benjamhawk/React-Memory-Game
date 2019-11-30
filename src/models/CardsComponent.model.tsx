import { ImageModel } from './imageData.model'

export type CardsProps = {
  images: ImageModel,
  selectedImages: {
    first: number | null,
    second: number | null
  }
  selectImage: (index: any) => void,
  addMatch: any
  matchesFound: string[]
}