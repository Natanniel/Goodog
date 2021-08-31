import Styled from 'styled-components';
import BG from './asset/p.png';
import Apple from '../../../assets/icons/disponivel_apple.png';
import Google from '../../../assets/icons/disponivel_google_play.png';

import iconFace from '../../../assets/icons/white-facebook.png';
import iconInsta from '../../../assets/icons/white-insta.png';
import iconYou from '../../../assets/icons/white-youtube.png';

export const Footer = Styled.div`
    height: 400px;
    background: #1B98A7;
    margin-top:80px;
   // background: url(${BG});
    background: #1B98A7;
    background-size:cover;
    font-family:Poppins;
    @media(max-width: 800px) {
        height:617px;
    }
`

export const Sitemap = Styled.div`

    flex-direction:row;
    display:flex;
    padding-top:80px;
    font-size: 20px;
    color:#fff;
    float:left;
    @media(max-width: 800px) {
        display:none;
    }
`

export const SitemapBlock = Styled.div`
    span{
        display:block;
        font-size:20px;
    }
    ul{       
        margin:0;
        padding:0; 
        margin-top:16px;
        li{
            display:block;
            list-style:none;
            padding:0;
            margin:0;
            font-size:16px;
            font-family:PoppinsLight;
            margin-top:8px;
        }
    }
`

export const IconGoogle = Styled.span`
    display:block;
    background:url(${Google});
    background-size:contain;
    background-repeat: no-repeat;
    height: 40px;
    width: 130px;
`

export const IconApple = Styled.span`
    display:block;
    background:url(${Apple});
    background-size:contain;
    background-repeat: no-repeat;
    height: 40px;
    width: 130px;
`

export const Stores = Styled.div`
    margin-top:42px;
`

export const Face = Styled.span`
    display:block;
    float:left;
    height: 20px;
    width: 20px;
    background: url(${iconFace});
    background-size: contain;
    background-repeat: no-repeat;
`
export const Youtube = Styled.span`
    display:block;
    float:left;
    height: 25px;
    width: 25px;
    background: url(${iconYou});
    background-size: contain;
    background-repeat: no-repeat;
    margin-left:20px;
`

export const Insta = Styled.span`
    display:block;
    float:left;
    height: 20px;
    width: 20px;
    background: url(${iconInsta});
    background-size: cover;
    background-repeat: no-repeat;
    margin-left:20px;
`