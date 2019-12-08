import styled from 'styled-components'

type Props = {
  isCurrentPlayer: boolean,
}

export const PlayerNameText = styled.span`
  font-weight: ${(props: Props) => props.isCurrentPlayer ? '600' : '400'};
  /* display: ${(props: Props) => props.isCurrentPlayer ? 'list-item' : 'block'};
  list-style-type: disc; */
  /* list-style-position: inside; */
`
