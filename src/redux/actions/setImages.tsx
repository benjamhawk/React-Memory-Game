import { SET_IMAGES } from '../actionStrings'

export const setImages = (images: string[]) => {
  return {
    type: SET_IMAGES,
    payload: images
  }
}
