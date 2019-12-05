import { combineReducers } from 'redux'
import imagesReducer from './reducers/imagesReducer'
import { ImageDataModel } from '../models/ImageData'
import gameDataReducer from './reducers/gameDataReducer'
import { GameDataModel } from '../models/GameData'
import { FeedbackMsgModel } from '../models/FeedBackMsgModel'
import feedbackMsgReducer from './reducers/feedbackMsgReducer'

export type AppState = {
  imageData: ImageDataModel,
  gameData: GameDataModel
  feedbackMsg: FeedbackMsgModel
}

export default combineReducers({
  imageData: imagesReducer,
  gameData: gameDataReducer,
  feedbackMsg: feedbackMsgReducer
})
