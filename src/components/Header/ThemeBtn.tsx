import React from 'react'

import { imageMapAnimals } from '../../lib/imageData/animals'
import { imageMapCars } from '../../lib/imageData/cars'
import { useSelector, shallowEqual } from 'react-redux'
import { changeTheme } from '../../redux/actions/changeTheme'
import {
  ThemeBtnContainer,
  ThemeBtnTitle,
  ThemeBtnThumbnail
} from './styled-components/ThemeBtnStyle'
import { AppState } from '../../redux'

export default () => {
  const theme = useSelector(({ theme }: AppState) => theme, shallowEqual)

  const onThemeClick = (newTheme: string) => {
    if (newTheme !== theme) {
      changeTheme(newTheme)
    }
  }

  return (
    <ThemeBtnContainer>
      <ThemeBtnTitle>
        <span className="fullText">Choose a theme:</span>
        <span className="shortText">Theme:</span>
      </ThemeBtnTitle>
      <ThemeBtnThumbnail
        onClick={() => onThemeClick('animals')}
        src={imageMapAnimals.penguin}
        alt="animals"
        name="animals"
      />
      <ThemeBtnThumbnail
        onClick={() => onThemeClick('cars')}
        src={imageMapCars.cars1}
        alt="cars"
        name="cars"
      />
    </ThemeBtnContainer>
  )
}
