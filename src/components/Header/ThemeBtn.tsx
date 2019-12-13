import React from 'react'

import { imageMap } from '../../lib/imageData/animals'
import { connect } from 'react-redux'
import { changeTheme } from '../../redux/actions/changeTheme'
import { ThemeBtnContainer, ThemeBtnTitle, ThemeBtnThumbnail } from './styled-components/ThemeBtnStyle'

const ThemeBtn = ({ changeTheme }: any) => {
  return (
    <ThemeBtnContainer>
      <ThemeBtnTitle>Choose a theme:</ThemeBtnTitle>
      <ThemeBtnThumbnail
        onClick={() => changeTheme('animals')}
        src={imageMap.penguin}
        alt='animals'
        name='animals'
      />
      <ThemeBtnThumbnail
        onClick={() => changeTheme('cars')}
        src={imageMap.penguin}
        alt='cars'
        name='cars'
      />
    </ThemeBtnContainer>
  )
}

export default connect(null, { changeTheme })(ThemeBtn)
