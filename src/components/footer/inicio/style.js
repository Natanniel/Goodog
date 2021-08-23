import Styled from 'styled-components';
import BG from './asset/p.png';

export const Footer = Styled.div`
    height: 400px;
    background: #1B98A7;
    margin-top:80px;
   // background: url(${BG});
   background: #1B98A7;
    background-size:cover;
    @media(max-width: 800px) {
        height:617px;
    }
`