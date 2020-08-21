import React from 'react'
import { useDispatch } from 'react-redux'
import { useTheme } from '../lib/customHooks/globalStateHooks'
import { Form } from 'react-bootstrap'
import { changeTheme } from '../features/theme/themeSlice'

export default () => {
  const dispatch = useDispatch()

  const theme = useTheme()

  return (
    <div>
      <h5>Instructions:</h5>
      <p>
        This is a two player game. The goal is to match identical pairs of
        cards. Click on a card to uncover the image. If you get a match, then go
        again. The player with the most matches at the end wins!{' '}
      </p>
      <h5>Choose a Theme:</h5>
      <Form>
        <Form.Check
          label="Animals 🐵"
          checked={theme === 'animals'}
          onClick={() => dispatch(changeTheme('animals'))}
          type="radio"
          id="animals"
        />
        <Form.Check
          label="Cars 🚗"
          checked={theme === 'cars'}
          onClick={() => dispatch(changeTheme('cars'))}
          type="radio"
          id="cars"
        />
      </Form>
    </div>
  )
}
