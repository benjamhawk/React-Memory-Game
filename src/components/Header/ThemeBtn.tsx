import React from 'react'

import { imageMapAnimals } from '../../lib/imageData/animals'
import { imageMapCars } from '../../lib/imageData/cars'
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/changeTheme'
import { ThemeBtnContainer, ThemeBtnTitle, ThemeBtnThumbnail } from './styled-components/ThemeBtnStyle'
import { AppState } from '../../redux'

const ThemeBtn = ({ changeTheme, theme }: any) => {
  const onThemeClick = (newTheme: string) => {
    if (newTheme !== theme) {
      changeTheme(newTheme)
    }
  }

  return (
    <ThemeBtnContainer>
      <ThemeBtnTitle>Choose a theme:</ThemeBtnTitle>
      <ThemeBtnThumbnail
        onClick={() => onThemeClick('animals')}
        src={imageMapAnimals.penguin}
        alt='animals'
        name='animals'
      />
      <ThemeBtnThumbnail
        onClick={() => onThemeClick('cars')}
        src={imageMapCars.cars1}
        alt='cars'
        name='cars'
      />
    </ThemeBtnContainer>
  )
}

const mapStateToProps = (state: AppState) => {
  return {
    theme: state.theme
  }
}
export default connect(mapStateToProps, { changeTheme })(ThemeBtn)
