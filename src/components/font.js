import { createGlobalStyle } from 'styled-components'


import InterRegular from '../assets/font/inter/Inter-Regular.ttf';

export const GlobalStyle = createGlobalStyle`  
   @font-face {
     font-family: 'Inter';
     src: url(${InterRegular});
  }
`;

