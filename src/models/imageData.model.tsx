export type ImageDataModel =
{
  selectedImages:  {
    first: number | null, 
    second: number | null
  }
  images: ImageModel 
}

export type ImageModel = {
  name: string
}[]