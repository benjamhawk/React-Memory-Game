import React from 'react'
import { Div } from './styled-components/MessageBarStyle'
import GameScores from './GameScores'
import FeedbackText from './FeedbackText'
import CurrentPlayer from './CurrentPlayer'

export const MessageBar = () => {
  return (
    <Div>
      <GameScores />
      <FeedbackText />
      <CurrentPlayer />
    </Div>
  )
}
