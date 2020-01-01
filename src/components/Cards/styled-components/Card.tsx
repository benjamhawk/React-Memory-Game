import styled from 'styled-components'

type Props = {
  isHidden: boolean,
  isLoaded: boolean
}
export const Card = styled.div`
  align-self: center;
  justify-self: center;
  width: 130px;
  height: 130px;
  display: ${(props: Props) => props.isLoaded ? 'block' : 'none'};
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

@media screen and (orientation: portrait) {
  width: 95px;
  height: 95px;
}
`
