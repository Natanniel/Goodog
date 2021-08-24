import Styled from 'styled-components';
import BackgroundRetangle from '../../../assets/img/homeRetangle.png';
import BackgroundRetangleMobile from '../../../assets/img/homeRetangleMobile.png';
import ArrowDown from '../../../assets/icons/arrow-down.png';
import bgretangulo from './retangulo.png';


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
    @media(max-width: 800px) {
        width: 100vw;
        height:304px;
        margin-top:0px;
        background:url(${BackgroundRetangleMobile});
        background-size: cover;
        background-repeat:no-repeat;
    }
`
export const Titulo = Styled.h1`
    font-family: PoppinsBold;
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
    @media(max-width: 800px) {
        font-size:25px;
        width:151px;
        line-height: 24px;
        top:80px;
        left:24px;
    }
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
    @media(max-width: 800px) {
        font-size:10px;
        width:112px;
        line-height: 12px;
        top:161px;
        left:24px;
    }
`


export const BoxRetangle = Styled.div`
    
    width: 1002px;
    height: 219px;
    margin:0 auto;
    left:0px;
    right:0px;
    position:absolute;
    top:441px;
    background:#fff;
    background:url(${bgretangulo});
    background-size:cover;
    border-radius:15px;
    @media(max-width: 800px) {
        background:#fff;
        top:206px;
        width:327px;
        height: 550px;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
  
    }
`

export const BtnPesquisar = Styled.span`
    display:none;
 @media(max-width: 800px) {
        display:block;
        height: 57px;
        width: 290px;
        left: 0px;
        top: 0px;
        border-radius: 4px;
        background: #1B98A7;
        border-radius: 4px;
        color:#fff;
        line-height:57px;
        text-align:center;
        margin:0 auto;
        margin-top:20px;
        font-family:Poppins;
        cursor:pointer;
    }

`

export const BtnPesquisarnormal = Styled.span`
    display:block;
    width:120px;
    height:55px;
    position:relative;
    left:840px;
    top:120px;
    cursor:pointer;
 @media(max-width: 800px) {
        display:none
    }

`

export const Itens = Styled.span`
    @media(max-width: 800px) {
        display:block;
        width:290px;
        height:48px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
        border-radius: 4px;
        margin:0 auto;
        margin-top:16px;
    }  

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
    @media(max-width: 800px) {
        width:290px;
        line-height:36px;
        margin-top:500px
    }

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
    @media(max-width: 800px) {
        letter-spacing: 0.15px;
        width:280px;
    }
`

export const Container = Styled.section`
    width:966px; 
    display:block;
    margin:0 auto;
    @media(max-width: 800px) {
        width:100vw;
    }
`

export const SectionCards = Styled.section`
    display:inline-block;
    margin-top:53px;
    
    @media(max-width: 800px) {
        display:block;
    }
`

export const Card = Styled.div`
    float:left;
    height: 248px;
    width: 229px;
    border-radius: 4px;
    border: 1px solid #0000001F;
    margin-right:10px;
    @media(max-width: 800px) {
        width:280px;
        float:none;
        margin:0 auto;
        margin-top:10px;
        margin-right:none!important;
    }
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
    margin-top:16px;
    
    color: rgba(0, 0, 0, 0.87);
    @media(max-width: 800px) {
        width:279px;
        margin:0 auto;
        margin-top:16px;
    }
    article{
        font-size: 20px;
        line-height: 80px;
        font-family:Poppins;
        margin-left:18px;
        display:block;
        float:left;
        width:600px;
        @media(max-width: 800px) {
            display:block;           
            margin-top:24px;
            width:210px;    
            height:48px;   
            line-height:24px;
            float:left;
            text-align:left;
        }
    }
    span{
        background:url(${ArrowDown});
        display:block;
        height: 7px;
        width: 12px;
        float:right;
        margin-top:36px;
        margin-right:30px;
        @media(max-width: 800px) {
            margin-right:22px;
        }
    }
`


export const LastLineQuestion = Styled.div`
    margin-top:40px;    
    height: 162px;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    @media(max-width: 800px) {
        width:280px;
        margin:0 auto;
        margin-top:32px;
        height:264px;
    }
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
    @media(max-width: 800px) {
        width:235px;
        margin-top:24px;
        margin-left:22px;
        text-align:center;
    }
`

export const LasLineGroup = Styled.div`
    width:478px;
    float:right;
    margin-right:83px;
    margin-top:54px;
    border-radius: 4px 4px 4px 4px;    
    border: 1px solid rgba(0, 0, 0, 0.12);
    height:54px;   
    @media(max-width: 800px) {
       
        width:100%;
        height:54px;
        border:none;
        margin:0 auto;
    }
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
    @media(max-width: 800px) {
        float:none;
        width:233px;
        height:54px;
        margin:0 auto;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        margin-top:17px;
    }
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
    @media(max-width: 800px) {
        margin:0 auto;
        width:236px;
        float:none;
        margin-top:17px;
    }
`

export const SectionFacaParte = Styled.section`
    width: 100vw; 
    height: 400px; 
    background: #EEFBFC; 
    margin-top: 80px;
    padding-top:80px;
    @media(max-width: 800px) {
        height:437px;
        padding-top:40px;
    }
    img{
        width: 475px; 
        height: 320px; 
       
        float: left; 
        margin-right: 94px;
        @media(max-width: 800px) {
            width:280px;
            height:189px;
            float:none;
            display:block;
            margin:0 auto;           
            margin-right: none;
        }
        
    }
   
`

export const FacaParte = Styled.div`
    float: left;
    width: 350px;
    @media(max-width: 800px) {
        float:none;
        width:100vw;
    }
    h2{
                    display: block;
                   
                    font-size: 34px;
                    font-family: Poppins;
                    @media(max-width: 800px) {
                        width:100vw;
                        height:36px;
                        margin-top: 24px;
                        text-align:center;
                    }
    }    
    div{
        display:block;
        span{
            font-size: 16px;
            color: rgba(0, 0, 0, 0.6);
            width: 316px;
            height: 48px; 
            font-family: Poppins; 
            color: rgba(0, 0, 0, 0.6);
            @media(max-width: 800px) {
                display: block;
                text-align:center;
                width:280px;
                margin:0 auto;
                height: 72px; 
            }
        }
    }
    #btnCadastrar{
        cursor: pointer;
         display: block;
          width: 180px;
           color: #fff; background: #1B98A7;
            border-radius: 4px;
             text-align: center;
              font-size: 14px;
               padding: 10px 15px;
                clear: both;
                 margin-top: 24px;
                  font-family: Poppins;
                  @media(max-width: 800px) {
                      margin:0 auto;
                      margin-top: 16px;
                  }
    }            
`
