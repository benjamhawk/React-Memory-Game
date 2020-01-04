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

  @media (max-width: 600px) and (orientation: portrait) {
    /* grid-row: 2/3; */
  }
`
export const ThemeBtnTitle = styled.h1`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  grid-column: 1/7;

  .fullText {
    display: inline;
  }

  .shortText {
    display: none;
  }

  @media (max-width: 600px) and (orientation: portrait) {
    .fullText {
      display: none;
    }

    .shortText {
      display: inline;
    }
  }

  @media (max-width: 750px) and (orientation: landscape) {
    font-size: .75rem;
}
`
export const ThemeBtnThumbnail = styled.img`
  border-radius: 50%;
  height: 35px;
  grid-row: 2/3;
  grid-column: ${(props: Props) => props.name === 'animals' ? '3/4' : '4/5'};
  
  @media (max-width: 600px) and (orientation: portrait) {
    height: 20px;
  }

  @media (max-width: 750px) and (orientation: landscape) {
    height: 20px;
}
`
