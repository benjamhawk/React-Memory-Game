import React from 'react'

import { imageMapAnimals } from '../../lib/imageData/animals'
import { imageMapCars } from '../../lib/imageData/cars'
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/changeTheme'
import { ThemeBtnContainer, ThemeBtnTitle, ThemeBtnThumbnail } from './styled-components/ThemeBtnStyle'

const ThemeBtn = ({ changeTheme }: any) => {
  return (
    <ThemeBtnContainer>
      <ThemeBtnTitle>Choose a theme:</ThemeBtnTitle>
      <ThemeBtnThumbnail
        onClick={() => changeTheme('animals')}
        src={imageMapAnimals.penguin}
        alt='animals'
        name='animals'
      />
      <ThemeBtnThumbnail
        onClick={() => changeTheme('cars')}
        src={imageMapCars.cars1}
        alt='cars'
        name='cars'
      />
    </ThemeBtnContainer>
  )
}

export default connect(null, { changeTheme })(ThemeBtn)
