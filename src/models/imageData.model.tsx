export type ImageDataModel =
{
  selectedImages:  {
    first: number | null, 
    second: number | null
  }
  images: ImageModel,
  matchesFound: string[]
}

export type ImageModel = {
  name: string
}[]