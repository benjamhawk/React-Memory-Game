import { animalsData } from '../../lib/imageData/animals'
import { SET_IMAGES, SELECT_IMAGE, ADD_MATCH } from '../actionStrings'
import { ImageDataModel } from '../../models/imageData.model'

const INITIAL_STATE: ImageDataModel = animalsData

export default (state: ImageDataModel = INITIAL_STATE, { type, payload }: any) => {
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
        return {
          ...state,
          selectedImages: {
            first: -1,
            second: -1
          }
        }
      }
    case ADD_MATCH:
      return {
        ...state,
        matchesFound: [...state.matchesFound, payload]
      }
    default:
      return state
  }
}
