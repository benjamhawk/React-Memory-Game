import { INITIAL_ANIMALS_STATE } from '../../lib/imageData/animals'
import { INITIAL_CARS_STATE } from '../../lib/imageData/cars'
import { SET_IMAGES, SELECT_IMAGE, ADD_MATCH, UNSELECT_IMAGES, RESET_GAME, CHANGE_THEME } from '../actionStrings'
import { ImageDataModel } from '../../models/ImageData'

export default (state: ImageDataModel = INITIAL_ANIMALS_STATE, { type, payload }: any) => {
  switch (type) {
    case SET_IMAGES:
      return payload
    case SELECT_IMAGE:
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
    case UNSELECT_IMAGES:
      return {
        ...state,
        selectedImages: {
          first: -1,
          second: -1
        }
      }
    case ADD_MATCH:
      return {
        ...state,
        matchesFound: [...state.matchesFound, payload]
      }
    case CHANGE_THEME:
    case RESET_GAME:
      return payload === 'animals' ? INITIAL_ANIMALS_STATE : INITIAL_CARS_STATE
    default:
      return state
  }
}
