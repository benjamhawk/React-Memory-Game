import { ADD_MATCH } from "../actionStrings"


export const addMatch = (name: string) => {
  return {
    type: ADD_MATCH,
    payload: name
  }
}
