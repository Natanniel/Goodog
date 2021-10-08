import Styled from 'styled-components';

export const Container = Styled.section`
    width:966px;
    margin:0 auto;
    @media(max-width: 800px) {
            width:auto;
        }
`
export const Button = Styled.button`
    display: block;
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
    &:hover{
        color: #1B98A7;
        background: #fff;
    
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
    height: 100px;
    width:100%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.12);
    box-sizing: border-box; 
    border-radius: 4px;
`