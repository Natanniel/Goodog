import Styled from 'styled-components';

export const Container = Styled.section`
    width:966px;
    margin:0 auto;
    @media(max-width: 800px) {
            width:auto;
        }
`
export const Button = Styled.button`
    display: inline-block;
    height: 36px;
    border: 1px solid #1B98A7;
    border-radius: 4px;
    background: #1B98A7;
    color: #fff;
    cursor: pointer;
    float: right;
    text-align: center;
    font-family: PoppinsLight;
    font-size: 14px;
    padding: 5px 14px;
    line-height:25px;
    &:hover{
        color: #1B98A7;
        background: #fff;
    }
    svg{
        float:left !important;
        margin-right:5px !important;
    }
`
export const ButtonWhite = Styled.button`
    display: block;
    height: 36px;
    border: 1px solid #1B98A7;
    border-radius: 4px;
    background: #fff;
    color: #1B98A7;
    cursor: pointer;
    float: right;
    text-align: center;
    font-family: PoppinsLight;
    font-size: 14px;
    padding: 5px 14px;  
      
`

export const Titulo = Styled.div`
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.15px;
    color: #1B98A7;
    margin-top:32px;
    span{
        display:block;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.4px;
        color: rgba(0, 0, 0, 0.38);
    }
`

export const Linha = Styled.div`
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    margin-top: 19px;
`

export const Input = Styled.fieldset`
    flex: 1;
    border: 1px solid rgba(0,0,0,0.12);
    border-radius: 3px;
    height: 54px;
    font-family: Poppins;
    legend{
        font-size: 12px;
        letter-spacing: 0.4px;
        color: rgba(0, 0, 0, 0.6);
    }
    input{
        display: block;
        height: 38px;
        width: 100%;
        border:none;
        font-size:16px;
        letter-spacing: 0.15px;
        &:focus{
            outline-width: 0!important;
        }
    }
`

export const Retangle = Styled.div`
    min-height: 100px;
    width:100%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box; 
    border-radius: 4px;
`

export const Box = Styled.div`
    height: 100px;
    width:100%;
    background: #FFFFFF;
    padding:16px 24px;
/* 06 dp */
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
`

export const Tabs = Styled.div`

    display:flex;
    flex-direction: row;
    @media(max-width: 800px) {
        display:none;
      }
    div{
       padding-bottom:10px;
        margin-right:33px;
       cursor:pointer;
            span{
                display:block;
                text-align: center;
                font-size:14px;
                margin-top:9px;
                font-family:Poppins;
                color: rgba(0, 0, 0, 0.6);
            }
            label{
                font-size:10px;
                text-align:center;
                font-family:PoppinsLight;
                padding-left:16px;
                padding-right:16px;
                padding-top:2px;
                color: rgba(0, 0, 0, 0.6);
            }
    }
    .selected{
        box-shadow: inset 0px -2px 0px #1B98A7;
        span{
            color:#000!important;
        }
    }

`