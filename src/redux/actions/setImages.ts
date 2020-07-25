import { ActionTypes } from './types'

export const setImages = (images: string[]) => {
  return {
    type: ActionTypes.SET_IMAGES,
    payload: images
  }
}
