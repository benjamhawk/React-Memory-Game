import { combineReducers } from 'redux'
import imagesReducer from './reducers/imagesReducer'
import { ImageDataModel } from '../models/ImageData'
import gameDataReducer from './reducers/gameDataReducer'
import { GameDataModel } from '../models/GameData'
import { FeedbackMsgModel } from '../models/FeedBackMsgModel'
import feedbackMsgReducer from './reducers/feedbackMsgReducer'
import themeReducer from './reducers/themeReducer'
import loadedImagesReducer from './reducers/loadedImagesReducer'
import { ThemeModel } from '../models/ThemeModel'

export interface AppState {
  imageData: ImageDataModel
  gameData: GameDataModel
  feedbackMsg: FeedbackMsgModel
  theme: ThemeModel
  loadedImages: number
}

export default combineReducers({
  imageData: imagesReducer,
  gameData: gameDataReducer,
  feedbackMsg: feedbackMsgReducer,
  theme: themeReducer,
  loadedImages: loadedImagesReducer
})
