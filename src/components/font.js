import { createGlobalStyle } from 'styled-components'


import InterRegular from '../assets/font/inter/Inter-Regular.ttf';
import InterBold from '../assets/font/inter/Inter-Bold.ttf';


export const GlobalStyle = createGlobalStyle`  
   @font-face {
     font-family: 'Inter';
     src: url(${InterRegular});
    }

    @font-face {
      font-family: 'Inter-bold';
      src: url(${InterBold});
     }
`;

