import styled from 'styled-components'

type Props = {
  // imageSrc: any
}

export const Card = styled.div`
  align-self: center;
  justify-self: center;
  background-color: ${props => props.theme.cardColor};
  border-radius: 50%;
  width: 130px;
  height: 130px;
`