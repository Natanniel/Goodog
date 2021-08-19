import Styled from 'styled-components';
import BackgroundRetangle from '../../../assets/img/homeRetangle.png';
import ArrowDown from '../../../assets/icons/arrow-down.png';
import Star from '../../../assets/icons/star.png';
import Heart from '../../../assets/icons/heart.png';
import ProfileImg from '../../../assets/img/profileCarla.png';

import BG from './asset/p.png';



export const Box = Styled.div`
    height: 110px;
    width: 1016px;
    left: 175px;
    border-radius: 15px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    margin:0 auto;
    margin-top:24px;
`

export const LeftDiv = Styled.section`
    width: 570px;
    float:left;
    margin-top:25px;
`

export const LeftTitleFilter = Styled.section`
    height: 24px;
    width: 215px;
    float:left;   
`

export const SelectFilter = Styled.div`
  
    select{
        height: 37px;
        width: 185px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        float:right;
        margin-right:8px;
        background:#fff;
  

    }
`


export const BtnFilter = Styled.span`
    display:block;
height: 36px;
width: 113px;
left: 0px;
top: 0px;
border-radius: 4px;
background: #1B98A7;
border-radius: 4px;
color:#fff;
font-family:Poppins;
float:right;
text-align:center;
line-height:36px;
font-size:14px;
cursor:pointer;
`

export const Separator = Styled.div`
width: 500px;
margin:0 auto;
margin-top:8px;
border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

export const RightDiv = Styled.section`
    width: 390px;
    float:right;
    border:1px solid;
    margin-top:25px;
`

export const Map = Styled.section`
    height: 688px;
    width: 393px;
    border-radius: 5px;
    line-height:688px;
    text-align:center;
    font-family:Poppins;
`

export const CardUser = Styled.section`
    height: 164px;
    width: 557px;
    border-radius: 5px;
    margin-top:16px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 5px;
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
