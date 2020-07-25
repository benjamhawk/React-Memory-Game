import { ActionTypes } from './types'

export const incrementLoadedImages = () => {
  return {
    type: ActionTypes.INCREMENT_LOADED_IMAGES,
    payload: 'increment'
  }
}
