import { ActionTypes } from './types'

export const addMatch = (name: string) => {
  return {
    type: ActionTypes.ADD_MATCH,
    payload: name
  }
}
