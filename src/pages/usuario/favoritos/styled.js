import Styled from 'styled-components';

export const FotoPerfil = Styled.div`
    height:80px;
    width:80px;
    margin-top:30px;
    img{
        display:block;
        height:80px;
        width:80px;
        border-radius:80px;
        border:1px solid rgba(0, 0, 0, 0.6);
    }
    span{
        display:block;
        position:relative;
        background:#1B98A7;
        color:#fff;
        height: 20px;
        width: 20px;
        text-align: center;
        line-height: 20px;
        border-radius:50px;
        font-size:18px;
        font-family:Poppins;
        left: 65px;
        top: -25px; 
        cursor:pointer;
        border:1px solid #1B98A7;
        &:hover{
            color:#1B98A7;
            background:#fff;
        }      
    }
`