import { INITIAL_ANIMALS_STATE } from '../../lib/imageData/animals'
import { INITIAL_CARS_STATE } from '../../lib/imageData/cars'
import { ImageDataModel } from '../../models/ImageData'
import { ActionTypes } from '../actions/types'

export default (
  state: ImageDataModel = INITIAL_ANIMALS_STATE,
  { type, payload }: any
) => {
  switch (type) {
    case ActionTypes.SET_IMAGES:
      return payload
    case ActionTypes.SELECT_IMAGE:
      if (state.selectedImages.first === -1) {
        return {
          ...state,
          selectedImages: {
            first: payload,
            second: -1
          }
        }
      } else if (state.selectedImages.second === -1) {
        return {
          ...state,
          selectedImages: {
            first: state.selectedImages.first,
            second: payload
          }
        }
      } else {
        return state
      }
    case ActionTypes.UNSELECT_IMAGES:
      return {
        ...state,
        selectedImages: {
          first: -1,
          second: -1
        }
      }
    case ActionTypes.ADD_MATCH:
      return {
        ...state,
        matchesFound: [...state.matchesFound, payload]
      }
    case ActionTypes.CHANGE_THEME:
    case ActionTypes.RESET_GAME:
      return payload === 'animals' ? INITIAL_ANIMALS_STATE : INITIAL_CARS_STATE
    default:
      return state
  }
}
