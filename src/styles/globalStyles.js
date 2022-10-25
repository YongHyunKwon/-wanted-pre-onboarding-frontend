import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  background-color: #f7f7f7;
}

 ul, li {
  list-style: none;
  padding-left: 0px;
 }
 
 button {
  cursor: pointer;
 }

 ::placeholder {
  font-weight: normal;
  color: #c4c4c4;
 }
`;

export default GlobalStyles;
