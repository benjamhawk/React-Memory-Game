import styled from 'styled-components'

type Props = {
  isSticky: boolean
}
export const Div = styled.div`
 position: ${(props: Props) => props.isSticky ? 'fixed' : ''};
 top: 0;
 display: grid;
 grid-row: 3/4;
 grid-column: 1/4;
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
`
