import { ActionTypes } from './types'

export const selectImage = (index: number) => {
  return {
    type: ActionTypes.SELECT_IMAGE,
    payload: index
  }
}
