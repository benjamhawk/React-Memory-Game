import { ActionTypes } from './types'

export const unselectImages = () => {
  return {
    type: ActionTypes.UNSELECT_IMAGES,
    payload: 'unselect images'
  }
}
