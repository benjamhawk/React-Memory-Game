import { combineReducers } from 'redux'
import imagesReducer from "./reducers/imagesReducer"
import { ImageDataModel } from '../models/ImageData.model'
import gameDataReducer from './reducers/gameDataReducer'
import { GameDataModel } from '../models/GameData.model'


export type AppState = {
  imageData: ImageDataModel,
  gameData: GameDataModel
}

export default combineReducers({
  imageData: imagesReducer,
  gameData: gameDataReducer
})
