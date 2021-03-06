import styled from 'styled-components'

type Props = {
  isSticky: boolean
}
export const Div = styled.div`
  position: ${(props: Props) => (props.isSticky ? 'fixed' : '')};
  top: 0;
  display: grid;
  grid-column: 1/-1;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 40px;
  background-color: ${props => props.theme.messageBarBgColor};
  color: ${props => props.theme.messageBarFontColor};
  font-size: 1.3rem;

  & p {
    margin: 0;
  }

  @media (max-width: 600px) and (orientation: portrait) {
    font-size: 1rem;
  }
`
