import styled from 'styled-components'

type Props = {
  isSelected: boolean
  isHidden: boolean
}

export const Img = styled.img`
  width: 100%;
  height: 100%;
  opacity: ${(props: Props) => {
    if (props.isHidden) {
      return 0.3
    } else if (props.isSelected) {
      return 1
    } else {
      return 0
    }
  }};
  border-radius: 50%;
  transition: opacity 500ms;
  object-fit: cover;
`
