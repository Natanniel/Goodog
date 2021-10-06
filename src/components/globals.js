import Styled from 'styled-components';

export const Container = Styled.section`
    width:966px;
    margin:0 auto;
    @media(max-width: 800px) {
            width:auto;
        }
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