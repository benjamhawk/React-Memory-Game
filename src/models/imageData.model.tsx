export type ImageDataModel =
{
  selectedImages:  {
    first: number  
    second: number 
  }
  images: ImageModel,
  matchesFound: string[]
}

export type ImageModel = {
  name: string
}[]