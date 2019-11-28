import { animalsData } from '../../imageData/animals'
import { SET_IMAGES } from '../actionStrings'

const INITIAL_STATE: string[] = animalsData

export default (state: any = INITIAL_STATE, { type, payload }: any) => {
  if (type === SET_IMAGES) {
    return payload
  } else {
    return state
  }
}
