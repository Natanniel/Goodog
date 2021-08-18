import { createGlobalStyle } from 'styled-components'


import InterRegular from '../assets/font/inter/Inter-Regular.ttf';
import InterBold from '../assets/font/inter/Inter-Bold.ttf';
import MulishRegular from '../assets/font/mulish/Mulish-Regular.ttf';
import Poppins from '../assets/font/poppins/Poppins-Regular.ttf';

export const GlobalStyle = createGlobalStyle`  
   @font-face {
     font-family: 'Inter';
     src: url(${InterRegular});
    }

    @font-face {
      font-family: 'Inter-bold';
      src: url(${InterBold});
     }

     @font-face {
      font-family: 'Mulish';
      src: url(${MulishRegular});
     }

     @font-face {
       font-family: 'Poppins';
       src: url(${Poppins});
     }
`;

