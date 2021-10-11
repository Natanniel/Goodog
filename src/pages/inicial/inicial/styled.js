import Styled from 'styled-components';
import BackgroundRetangle from '../../../assets/img/homeRetangle.png';
import BackgroundRetangleMobile from '../../../assets/img/homeRetangleMobile.png';
import ArrowDown from '../../../assets/icons/arrow-down.png';
import bgretangulo from './retangulo.png';
import iconSofa from '../../../assets/icons/Vector.png';
import iconDog from '../../../assets/icons/dog.png';
import iconBaba from '../../../assets/icons/baba.png';
import iconPasseio from '../../../assets/icons/passeio.png';
import iconCreche from '../../../assets/icons/creche.png';


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
        width:190px;
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
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);  
    border-radius:15px;
    @media(max-width: 800px) {
        background:#fff;
        top:206px;
        width:327px;
        min-height: 550px;
        height:auto;
        padding-bottom:15px;
        box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    }
`

export const Cabecalho = Styled.div`
    display:flex;
    flex-direction: row;
    margin-top:16px;
    margin-left:24px;
    
    margin-right: 24px;
    @media(max-width: 800px) {
        display:none;
      }
    div{
        padding-bottom:10px;
        flex:1;
        display:flex;
        flex-direction: row;
        cursor:pointer;
        div{ 
            flex:1;
            display:block;
            span{
                display:block;
                font-size:14px;
                margin-top:9px;
                font-family:Poppins;
                color: rgba(0, 0, 0, 0.6);
                text-align:left;
            }
            label{
                font-size:10px;
                font-family:PoppinsLight;
                padding-top:2px;
                color: rgba(0, 0, 0, 0.6);
                text-align:left;
                display:block;
            }
        }
    }
    .selected{       
        span{
            color:#000!important;
        }
    }
`

export const Filters = Styled.div`
    display:flex;
    flex-direction: row;
    margin-left:25px;
    margin-top:42px;
    @media(max-width: 800px) {
        display:none;
    }
    fieldset{
        float:left;
        border-radius: 3px;
        border:1px solid rgba(0, 0, 0, 0.12);
        legend{
            color: rgba(0, 0, 0, 0.6);
            font-size:12px;
            font-family:Poppins;
        }
        input{
            display:block;
            border:none;
            width: 100%;
            height:35px;
            font-size:16px;
            font-family:Poppins;
            text-indent:5px;
        }
        select{
            display:block;
            border:none;
            width: 100%;
            height:35px;
            font-size:16px;
            font-family:Poppins;
            text-indent:5px;
        }
        input:focus, select:focus {
            outline-width: 0;
        }
    }
`

export const BtnPesquisar = Styled.span`
    a{
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
    }


`

export const BtnPesquisarnormal = Styled.span`
    a{
        display:block;
        width:125px;
        height:65px;   
        cursor:pointer;
        background: #1B98A7;
        border-radius: 4px;
        line-height:65px;
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
export const Sofa = Styled.span`
    display:block;
    background: url(${iconSofa});
    background-size:contain;
    height:32px;
    width:32px;
    margin-top:10px;
    margin-right:10px;
    margin-left:10px;
`;

export const Dog = Styled.span`
    display:block;
    background: url(${iconDog});
    height:32px;
    width:32px;
    margin-top:10px;
    margin-right:10px;
    margin-left:10px;
`;

export const Baba = Styled.span`
    display:block;
    background: url(${iconBaba});
    background-size:contain;
    height:32px;
    width:32px;
    margin-top:10px;
    margin-right:10px;
    margin-left:10px;
`;

export const Passeio = Styled.span`
    display:block;
    background: url(${iconPasseio}) 100% 100% ;
    height:32px;
    width:32px;
    margin-top:10px;
    margin-right:10px;
    margin-left:10px;
    background-size:contain;
`;

export const Creche = Styled.span`
    display:block;
    background: url(${iconCreche}) 100% 100% ;
    height:32px;
    width:32px;
    margin-top:10px;
    margin-right:10px;
    margin-left:10px;
    background-size:contain;
`;


export const Itens = Styled.span`
    display:none;
    @media(max-width: 800px) {
        display:block;
        width:290px;
        height:64px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
        border-radius: 4px;
        margin:0 auto;
        margin-top:16px;
        padding-top:14px;
        padding-left:8px;
        margin-right: 24px;
        font-family:Poppins;
    }  
    span{
        display:block;
        height: 20px;
        width: 240px;
        line-height:20px;        
    }
    label{
        display:block;
        height: 16px;
        width: 240px;
        line-height:20px; 
        font-size: 10px;
        line-height: 16px;
        letter-spacing: -0.4px;
        color: rgba(0, 0, 0, 0.6);   
    }

`
export const ItensInput = Styled.fieldset`
    display:none;
    @media(max-width: 800px) {
        display:block;
        width:290px;
        height:64px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
        border-radius: 4px;
        margin:0 auto;
        margin-top:16px;
        padding-top:14px;
        padding-left:8px;
        font-family:Poppins;
    }  
    legend{
        color: rgba(0, 0, 0, 0.6);
        font-size:12px;
        padding-left:5px; 
        padding-right:5px;
    }
   
`


export const Titulo2 = Styled.h2`
    font-family: Poppins;
    display:block;
    margin:0 auto;
    font-size: 34px;
    margin-top: 180px;
    text-align:center;
    font-size:34px;
    color: rgba(0, 0, 0, 0.87);
    @media(max-width: 800px) {
        width:290px;
        line-height:36px;
        margin-top:620px;
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
    .accordion{
        font-family:Poppins;
        border:none;
    }
    .accordion__item{
        margin-top:16px;
       border:none;
    }

    .accordion__button{
        background:#fff!important;
        height:80px;
        border: 1px solid rgba(0,0,0,0.12);
        padding:0px;
        line-height:80px;
        text-indent:18px;
        font-size:20px;
        border-radius:4px;
    }

    .accordion__button:before {display:none}
    
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
    /*
display: inline-block;
    content: '';
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;*/

  /*  display:'block';
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
    */
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
    width: 100%; 
    height: 400px; 
    background: #EEFBFC; 
    margin-top: 80px;
    padding-top:80px;
    font-family:Poppins;
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
