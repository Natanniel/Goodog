import Styled from 'styled-components';

export const Divider = Styled.hr`
    border: 0.5px solid rgba(0, 0, 0, 0.12);
    margin-top:25px;
`

export const Titulo = Styled.span`
    font-size:34px;
    font-family:Poppins;
    display:block;
    margin-top:24px;    
`

export const Step = Styled.div`
    background-color: rgba(18,08,55,0.24) ;
    mix-blend-mode: normal;
    height:4px;
    margin-top:34px;
    span{
        display:block;
        background: #1B98A7;
        height:4px;
    }
`

export const Titulo2 = Styled.div`
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

export const Row = Styled.div`
    display:flex;
    flex-direction: row;
    margin-top:19px;
    fieldset{
        flex:1;
        border: 1px solid  rgba(0, 0, 0, 0.12);
        border-radius: 3px;
        height:54px;
        legend{
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            letter-spacing: 0.4px;
            color: rgba(0, 0, 0, 0.6);
        }
        input,select{
            display:block;
            height:100%;
            width:100%;
            font-size:16px;
            font-family:Poppins;
            border:none
        }
        input:focus, select:focus {
            outline-width: 0;
        }
    }
`
