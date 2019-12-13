import styled from 'styled-components'

type Props = {
  name: string
}

export const ThemeBtnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  justify-items: center;
  grid-row: 1/2;
  grid-column: 1/2;
  width: 100%;
  height: 100%;
`
export const ThemeBtnTitle = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  grid-column: 1/7;
`
export const ThemeBtnThumbnail = styled.img`
  border-radius: 50%;
  height: 35px;
  grid-row: 2/3;
  grid-column: ${(props: Props) => props.name === 'animals' ? '3/4' : '4/5'};
  /* width: 100%; */
`