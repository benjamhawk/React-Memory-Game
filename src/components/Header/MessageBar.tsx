import React, { useState, useRef, useEffect } from 'react'
import { Div } from './styled-components/MessageBarStyle'
import GameScores from './GameScores'
import FeedbackText from './FeedbackText'
import CurrentPlayer from './CurrentPlayer'

export const MessageBar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const topToNav = (ref as any).current.offsetTop

    const handleScroll = () => {
      setIsSticky(window.scrollY >= topToNav)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  return (
    <Div
      isSticky={isSticky}
      ref={ref}
    >
      <GameScores />
      <FeedbackText />
      <CurrentPlayer />
    </Div>
  )
}
