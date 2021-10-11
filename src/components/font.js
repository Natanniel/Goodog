import { createGlobalStyle } from 'styled-components'


import InterRegular from '../assets/font/inter/Inter-Regular.ttf';
import InterBold from '../assets/font/inter/Inter-Bold.ttf';
import MulishRegular from '../assets/font/mulish/Mulish-Regular.ttf';
import MulishBold from '../assets/font/mulish/Mulish-Bold.ttf';
import Poppins from '../assets/font/poppins/Poppins-Regular.ttf';
import PoppinsBold from '../assets/font/poppins/Poppins-Bold.ttf';
import PoppinsLight from '../assets/font/poppins/Poppins-Light.ttf';


export const GlobalStyle = createGlobalStyle`  
  .toast{
    font-family:poppins!important
  }

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
      font-family: 'MulishBold';
      src: url(${MulishBold});
     }

     @font-face {
       font-family: 'Poppins';
       src: url(${Poppins});
     }

     @font-face {
       font-family: 'PoppinsBold';
       src: url(${PoppinsBold});
     }
     @font-face {
       font-family: 'PoppinsLight';
       src: url(${PoppinsLight});
     }
`;

