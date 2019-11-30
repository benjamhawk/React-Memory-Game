import styled from 'styled-components'

type Props = {
  ishidden: number
}
export const Card = styled.div`
  align-self: center;
  justify-self: center;
  background-color: ${(props: Props) => {
    if (props.ishidden === -1) {
      return props => props.theme.cardColor
    }
    else {
      return props => props.theme.cardHiddenColor
    }
  }
  };
  border-radius: 50%;
  width: 130px;
  height: 130px;
`