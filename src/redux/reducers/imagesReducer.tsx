import { animalsData } from '../../imageData/animals'
import { SET_IMAGES, SELECT_IMAGE } from '../actionStrings'
import { ImageDataModel } from '../../models/imageData.model'

const INITIAL_STATE: ImageDataModel = animalsData

export default (state: any = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case SET_IMAGES:
      return payload
    case SELECT_IMAGE:
      if (state.selectedImages.first === null) {
        return {
          ...state,
          selectedImages: {
            first: payload,
            second: null
          }
        }
      } else if (state.selectedImages.second === null) {
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
            first: null,
            second: null
          }
        }
      }
    default:
      return state
  }
}
