import styled from 'styled-components'

export const Div = styled.div`
 display: grid;
 grid-row: 3/4;
 grid-column: 1/4;
 grid-template-columns: 1fr 1fr 1fr;
 align-items: center;
 justify-items: center;
 width: 100%;
 height: 100%;
 background-color: ${props => props.theme.messageBarBgColor};
 color: ${props => props.theme.messageBarFontColor};
 font-size: 1.3rem;

 & p {
   margin: 0;
 }
`
