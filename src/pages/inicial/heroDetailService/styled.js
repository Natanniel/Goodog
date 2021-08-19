import Styled from 'styled-components';
import Star from '../../../assets/icons/star.png';
import Heart from '../../../assets/icons/heart.png';
import ProfileImg from '../../../assets/img/profileCarla.png';
import Tobby from '../../../assets/icons/tobby.png';

import BG from './asset/p.png';


export const Content = Styled.div`
    height:1300px;
    width: 1016px;
    background: url(${BG});
    background-size: cover;
    margin: 0 auto;
    margin-top:8px;
`

export const Titulo = Styled.span`
    display:block;
    font-size:34px;
    color: rgba(0, 0, 0, 0.87);
    font-family:Poppins;
    margin-top:24px;
`


export const CardUser = Styled.section`
    height: 164px;
    width: 638px;
    border-radius: 5px;
    margin-top:16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

export const Profile = Styled.div`
    background:url(${ProfileImg});
    background-size:contain;
    background-repeat:no-repeat;
    height:80px;
    width:80px;
    float:left;
    margin-top:26px;
    margin-left:16px;
`

export const ProfileInfo = Styled.div`
    width:300px;
    margin-top:40px;
    float:left;
    margin-left:41px;
`

export const ProfileNome = Styled.span`
    height: 24px;
    width: 158px;
    font-family:Poppins;
    color: rgba(0, 0, 0, 0.87);
    font-size: 24px;
    span{
        font-size:10px;
        font-family: Poppins;
        color: rgba(0, 0, 0, 0.38);
        position:relative;
        top:-2.5px;
    }
`
export const ProfileRanking = Styled.div`
  
`

export const RankingStars = Styled.div`
    float:left;
    span{
        display:block;
        width:10px;
        height:10px;
        background:url(${Star});
        background-size:contain;
        float:left;
        margin-left:5px;
        margin-top:7px;
    }
    label{
        color: rgba(0, 0, 0, 0.6);
        font-family:Poppins;
        font-size:12px;
        margin-left:10px;
    }
`

export const FinaisSemana = Styled.div`
    display:block;
    height: 32px;
    width: 240px;
    background: #EEFBFC;
    border-radius: 16px;
    margin-top:16px;
    font-family:Poppins;
    color: #1B98A7;
    font-size:14px;
text-align:center;
line-height:32px;
`

export const RankingRecorrencia = Styled.div`

  span{
        display:block;
        width:10px;
        height:10px;
        background:url(${Heart});
        background-size:contain;
        background-repeat:no-repeat;
        float:left;
        margin-left:5px;
        margin-top:7px;
        margin-left:25px;
    }
    label{
        color: rgba(0, 0, 0, 0.6);
        font-family:Poppins;
        font-size:12px;
        margin-left:10px;
    }
`

export const Valor = Styled.div`
    float:right;
    width:70px;
    margin-top:40px;
    margin-right:17px;
    span{
        display:block;
        font-size:24px;
        width:70px;
        color: #1B98A7;
        font-family:Poppins;
    }
    label{
        display:block;
        width:70px;
        font-size:10px;
        color: #1B98A7;
        font-family:Poppins;
        color: rgba(0, 0, 0, 0.38);
        margin-top:-2.5px;
    }
`

export const TituloSection = Styled.span`
    display:block;
    color: #1B98A7;
    font-size: 20px;
    margin-top:24px;
`

export const Linha = Styled.section`
    width:100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    margin-top:24px;
`

export const BoxService = Styled.section`
    width: 638px;
    height: 186px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    margin-top: 24px;
`

export const BoxDog = Styled.section`
    height: 100px;
    width: 638px;
    border-radius: 4px;
    margin-top:16px;
    border: 1px solid rgba(0, 0, 0, 0.12);
`

export const BoxDogProfile = Styled.div`
  background:url(${Tobby});
    background-size:contain;
    background-repeat:no-repeat;
    height:40px;
    width:40px;
    float:left;
    margin-top:30px;
    margin-left:16px;
`