import { combineReducers } from 'redux'
import imagesReducer from "./reducers/imagesReducer"
import { ImageDataModel } from '../models/imageData.model'


export type AppState = {
  imageData: ImageDataModel 
}

export default combineReducers({
  imageData: imagesReducer
})
