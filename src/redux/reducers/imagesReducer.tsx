import { animalsData } from '../../imageData/animals'
import { SET_IMAGES, SELECT_IMAGE } from '../actionStrings'
import { ImageDataModel } from '../../models/imageData.model'

const INITIAL_STATE: ImageDataModel = animalsData

export default (state: any = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case SET_IMAGES:
      return payload
    case SELECT_IMAGE:
      return {
        ...state, selectedImage: payload 
      }
    default:
      return state
  }
}
