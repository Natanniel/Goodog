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
    @media(max-width: 800px) {
        display:none;
    }
`

export const Filters = Styled.div`
    display:flex;
    flex-direction: row;
    padding-left:22px;
    padding-top:23px;
    fieldset{
        float:left;
        border-radius: 3px;
        border:1px solid rgba(0, 0, 0, 0.12);
        margin:0px;
        padding:0px;
        margin-left:5px;
        height:60px;
        legend{
            color: rgba(0, 0, 0, 0.6);
            font-size:12px;
            font-family:Poppins;
            margin-left:10px;
        }
        select{
            height:30px;
            border:none;
            font-size:16px;
            text-indent: 5px;
            font-family:Poppins;
            width:95%;
            &:focus{
                outline-width: 0!important;
            }
        }
        input{
            height:30px;
            border:none;
            font-size:16px;
            text-indent: 5px;
            font-family:Poppins;
            &:focus{
                outline-width: 0!important;
            }
        }
    }
`

export const BtnPesquisarnormal = Styled.span`
    a{
        display:block;
        width:125px;
        height:50px;   
        cursor:pointer;
        background: #1B98A7;
        border-radius: 4px;
        line-height:50px;
        text-align:center;
        color:#fff;
        margin-top:9px;
        margin-left:9px; 
        font-family:Poppins;
        font-size:14px;
        @media(max-width: 800px) {
            display:none
        }
    }
`


export const LeftDiv = Styled.section`
    width: 570px;
    float:left;
    margin-top:25px;
    @media(max-width: 800px) {
        width:100vw;
    }
    
`

export const LeftTitleFilter = Styled.section`
    height: 24px;
    width: 215px;
    float:left;
    padding-left:40px;
    @media(max-width: 800px) {
        padding-left:0px;
    }
    
`
export const LeftTitleFilterSpan = Styled.span`
    font-size: 16; 
    font-family: Poppins;
    color: rgba(0, 0, 0, 0.87);
    width: 215px;
    display: block;
    @media(max-width: 800px) {
        display:none;
    }
`
export const LeftTitleFilterSpan2 = Styled.span`
    font-size: 20; 
    font-family: Poppins;
    color: #1B98A7;
    width: 215px;
    display: block;
    margin-top:-5px;
    padding-top:0px;
    @media(max-width: 800px) {
        display:block;
        font-size:14px;
        color: rgba(0, 0, 0, 0.6);
        padding-left:40px;
    }
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
    @media(max-width: 800px) {
            display:none;
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
    @media(max-width: 800px) {
        background:#fff;
        color:#1B98A7;
        line-height:10px;

    }
`

export const SearchTopics = Styled.section`
    display:none;
    @media(max-width: 800px) {
        display:block;
        height:32px;        
    }
    span{
        display:block;
        padding:5px 10px;
        float:left;
        color:#fff;
        background: #1B98A7;
        border-radius: 16px;
        font-family:PoppinsLight;
        text-align:center;
        font-size:12px;
        margin-left:8px;
    }
`


export const SearchTypes = Styled.section`
    display:none;
    @media(max-width: 800px) {
        display:block;
        height:32px;      
        margin-top: 27px; 
    }
    #comboSearch{
        display:block;
        padding:5px 10px;
        float:left;
        border-radius: 16px;
        font-family:Poppins;
        text-align:center;
        font-size:14px;
        margin-left:8px;
        color: rgba(0, 0, 0, 0.87);
    }
    #mapView{
        display:block;
        padding:7.5px 25px;
        float:right;
        border-radius: 16px;
        font-family:Poppins;
        text-align:right;
        font-size:14px;
        margin-left:8px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        border-radius:18px;
        color:#1B98A7;
        margin-right:8px;
    }
`


export const Separator = Styled.div`
width: 500px;
margin:0 auto;
margin-top:8px;
border-bottom: 1px solid rgba(0, 0, 0, 0.12);
@media(max-width: 800px) {
    display:none;
}
`

export const RightDiv = Styled.section`
    width: 380px;
    float:right;
    border:1px solid;
    margin-top:25px;
    @media(max-width: 800px) {
       display:none
    }
    
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
    @media(max-width: 800px) {
        width:350px;
        margin:0 auto;
        margin-top:16px;
        height:164px;
    }
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
    @media(max-width: 800px) {
        height:64px;
        width:64px;
    }
`

export const ProfileInfo = Styled.div`
    width:300px;
    margin-top:40px;
    float:left;
    margin-left:41px;
    @media(max-width: 800px) {
        width:165px;
        margin-left:16px;
        margin-top:30px;
    }
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
        @media(max-width: 800px) {
            display:none;
        }
    }
    @media(max-width: 800px) {
        font-size:20px
    }
`
export const ProfileRanking = Styled.div`
    @media(max-width: 800px) {
       height:50px;
    }
`

export const RankingStars = Styled.div`
    float:left;
    
    @media(max-width: 800px) {
        display:block;
        width: 250px;
    }
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
@media(max-width: 800px) {
        font-size:12px;
        height: 26px;
        width: 195px;
        line-height:26px;
    }
`

export const RankingRecorrencia = Styled.div`

@media(max-width: 800px) {
        display:block;
        width: 250px;
        float:left;
        margin-top:10px;
        margin-left:-20px
    }
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
    margin-right:10px;
    @media(max-width: 800px) {
        margin-top:30px;
    }
    span{
        display:block;
        font-size:24px;
        width:70px;
        color: #1B98A7;
        font-family:Poppins;
        @media(max-width: 800px) {
            font-size:20px;
            text-align:center;
        }
    }
    label{
        display:block;
        width:70px;
        font-size:10px;
        color: #1B98A7;
        font-family:Poppins;
        color: rgba(0, 0, 0, 0.38);
        margin-top:-2.5px;
        @media(max-width: 800px) {
            text-align:center;
        }
    }
`
