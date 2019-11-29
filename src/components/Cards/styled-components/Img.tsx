import styled from 'styled-components'

type Props = {
  isSelected: boolean
}

export const Img = styled.img`
  width: 100%;
  height: 100%;
  opacity: ${(props: Props) => props.isSelected ? '1' : '0'};
  border-radius: 50%;
  transition: opacity 500ms;
`