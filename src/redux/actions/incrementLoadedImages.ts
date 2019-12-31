import { INCREMENT_LOADED_IMAGES } from '../actionStrings'

export const incrementLoadedImages = () => {
  return {
    type: INCREMENT_LOADED_IMAGES,
    payload: 'increment'
  }
}