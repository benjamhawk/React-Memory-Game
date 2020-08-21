import React from 'react'

import { imageMapAnimals } from '../../lib/imageData/animals'
import { imageMapCars } from '../../lib/imageData/cars'
import {
  ThemeBtnContainer,
  ThemeBtnTitle,
  ThemeBtnThumbnail
} from './styled-components/ThemeBtnStyle'
import { useTheme } from '../../lib/customHooks/globalStateHooks'
import { ThemeName, changeTheme } from '../../features/theme/themeSlice'

export default () => {
  const theme = useTheme()

  const onThemeClick = (newTheme: ThemeName) => {
    if (newTheme !== theme) {
      changeTheme(newTheme)
    }
  }

  return (
    <ThemeBtnContainer>
      {/* <ThemeBtnTitle>
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

        alt="cars"
        name="cars"
      /> */}
    </ThemeBtnContainer>
  )
}
