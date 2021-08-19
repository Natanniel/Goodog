import Styled from 'styled-components';
import BackgroundRetangle from '../../../assets/img/homeRetangle.png';
import ArrowDown from '../../../assets/icons/arrow-down.png';


export const Retangle = Styled.div`
    display:block;
    width: 1132px;
    height: 522px;
    background:url(${BackgroundRetangle});
    position:relative;
    margin:0 auto;
    left: 0;
    right: 0;
    margin-top:40px;
`
export const Titulo = Styled.h1`
    font-family: Poppins;
    font-size: 48px;
    font-weight: 700;
    text-align: left;
    height: 113px;
    width: 420px;
    position:absolute;
    left:82px;
    top:184px;
    margin:0px;
    padding:0px;
    line-height: 56px;
`
export const SubTitulo = Styled.span`
    font-family: Poppins;
    font-size: 24px;
    font-weight: 400;
    text-align: left;
    height: 21px;
    width: 429px;
    position:absolute;
    left: 82px;
    top: 305px;
    color: rgba(0, 0, 0, 0.6);
`


export const BoxRetangle = Styled.div`
    width: 966px;
    height: 188px;
    margin:0 auto;
    left:0px;
    right:0px;
    position:absolute;
    top:441px;
    background:#fff;
    border-radius:15px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
`

export const Titulo2 = Styled.h2`
    font-family: Poppins;
    display:block;
    margin:0 auto;
    font-size: 34px;
    margin-top: 161px;
    text-align:center;
    font-size:34px;
    color: rgba(0, 0, 0, 0.87);

`

export const Subtitulo2 = Styled.span`
    font-family: Poppins;
    display:block;
    width: 545px;
    text-align:center;
    margin:0 auto;
    font-size:16px;
    margin-top:26px;
    color: rgba(0, 0, 0, 0.6);
    letter-spacing: 0.15px;
`

export const Container = Styled.section`
    width:966px; 
    display:block;
    margin:0 auto;
`

export const SectionCards = Styled.section`
    display:inline-block;
    margin-top:53px;

`

export const Card = Styled.div`
    float:left;
    height: 248px;
    width: 230px;
    border-radius: 4px;
    border: 1px solid #0000001F;
    margin-right:10px;
`

export const IconCard = Styled.img`
    display:block;
    margin:0 auto;
    height:48px;
    width:48px;
    margin-top:32px;
`

export const CardTitle = Styled.span`
    display:block;
    text-align: center;
    font-size:20px;
    margin-top:20px;
    font-family:Poppins;
    color: rgba(0, 0, 0, 0.87);
`

export const CardSubtitle = Styled.span`
    display:block;
    width: 165px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
    text-align:center;
    margin:0 auto;
    margin-top:8px;
    height:40px;
    font-family:Poppins;
`

export const CardButton = Styled.span`
    cursor:pointer;
    display:block;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box;
    border-radius: 4px;
    margin:0 auto;
    margin-top:15px;
    padding: 0px 15px;
    line-height:36px;
    width:119px;
    height:36px;
    font-size:14px;
    text-align:center;
    font-family:Poppins;
`

export const BoxQuestion = Styled.div`
    display:'block';
    height:80px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius:4px;
    font-size: 20px;
    line-height: 80px;
    text-indent:24px;
    margin-top:16px;
    font-family:Poppins;
    color: rgba(0, 0, 0, 0.87);
    span{
        background:url(${ArrowDown});
        display:block;
        height: 7px;
        width: 12px;
        float:right;
        margin-top:36px;
        margin-right:30px;
    }
`


export const LastLineQuestion = Styled.div`
    margin-top:40px;    
    height: 162px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
`

export const LastLineQuestionTitle = Styled.span`
    display:block;
    font-size:34px;
    width: 235px;
    height: 72px;
    margin-top:45px;
    margin-left:82px;
    font-family:Poppins;
    line-height: 36px;
    float:left;
    color:#1B98A7;
`

export const LasLineGroup = Styled.div`
    width:478px;
    float:right;
    margin-right:83px;
    margin-top:54px;
    border-radius: 4px 4px 4px 4px;    
    border: 1px solid rgba(0, 0, 0, 0.12);
    height:54px;   
`

export const LasLineGroupInput = Styled.input`
    display:block;
    float:left;
    border:none;
    height:52px;
    text-indent:15px;
    font-size:16px;
    width:320px;
    font-family:Poppins;
`

export const LasLineTalkUs = Styled.span`
    display: block;
    cursor:pointer;
    float:right;
    width:152px;
    text-align:center;
    height:54px;
    line-height:54px;
    background:#1B98A7;
    color:#fff;
    font-size:14px;
    border-radius: 0px 4px 4px 0px;
    font-family:Poppins;
`