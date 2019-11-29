import { combineReducers } from 'redux'
import imagesReducer from "./reducers/imagesReducer"
import { ImageDataModel } from '../models/imageData.model'


export type AppState = {
  images: ImageDataModel 
}

export default combineReducers({
  images: imagesReducer
})
