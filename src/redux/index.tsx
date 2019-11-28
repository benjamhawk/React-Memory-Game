import { combineReducers } from 'redux'
import imagesReducer from "./reducers/imagesReducer"


export type AppState = {
  images: string[]
}

export default combineReducers({
  images: imagesReducer
})
