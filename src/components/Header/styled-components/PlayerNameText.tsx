import styled from 'styled-components'

type Props = {
  isCurrentPlayer: boolean,
}

export const PlayerNameText = styled.span`
  .fullPlayerName {
    font-weight: ${(props: Props) => props.isCurrentPlayer ? '600' : '400'};
    display: inline;
  }
  .shortPlayerName {
    display: none;
    padding-right: 5px;
  }

  @media screen and (orientation: portrait) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) and (orientation: portrait) {
    .fullPlayerName {
      display: none;
    }
    .shortPlayerName {
      display: inline;
    }
  }

  @media (max-width: 750px) and (orientation: landscape) {
    .fullPlayerName {
      display: none;
    }
    .shortPlayerName {
      display: inline;
    }
  }
`
