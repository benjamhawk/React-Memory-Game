import styled from 'styled-components'

type Props = {
  isHidden: boolean
}
export const Card = styled.div`
  align-self: center;
  justify-self: center;
  width: 130px;
  height: 130px;
  background-color: ${(props: Props) => {
    if (!props.isHidden) {
      return props => props.theme.cardColor
    } else {
      return props => props.theme.cardHiddenColor
    }
  }
};
  border-radius: 50%;
  box-shadow: ${props =>
    !props.isHidden
      ? `${props.theme.cardShadow} 0px 3px 2px`
      : ''
};
`
