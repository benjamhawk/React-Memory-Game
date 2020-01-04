import styled from 'styled-components'

export const CurrentPlayerStyle = styled.p`
  & .playerNum {
    font-weight: 600;
  }

  .fullPlayerName {
    display: inline;
  }
  .shortPlayerName {
    display: none;
    font-weight: 600;
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
