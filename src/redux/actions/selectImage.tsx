import { SELECT_IMAGE } from "../actionStrings"


export const selectImage = (index: number) => {
  return {
    type: SELECT_IMAGE,
    payload: index
  }
}