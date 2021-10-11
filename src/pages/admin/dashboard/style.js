import Styled from 'styled-components';

export const Box = Styled.section`
    display:flex;
    width:100%;
    margin-top:58px;
    div{
        cursor:pointer;
        flex:1;
        border: 1px solid #DFE0EB;
        box-sizing: border-box;
        border-radius: 8px;
        margin-right:30px;
        height:134px;
        background:#fff;
        label{
            display:block;
            font-size:19px;
            color:#9FA2B4;
            margin-top:24px;
            margin-left:24px; 
            margin-right:24px;
            text-align:center;
            font-family:Mulish;
        }
        span{
            display:block;
            font-size:40px;
            font-family:Mulish;
            text-align:center;
            margin-top:12px;
        }
    }
    div:nth-child(4){
        margin-right:0px;
    }
    .selected{
        border: 1px solid #1B98A7!important;
        span,label{
            color:#1B98A7!important;
        }
    }

`

export const ContentDashboard = Styled.section`
    display:flex;
    div:nth-child(1){
        flex:1;
        span{
            font-family: Mulish;
            font-size: 19px;
        }
    }
    div:nth-child(2){
        width:342px;
        border-left: 1px solid #DFE0EB;
        div{
            height: 80px;
            border-bottom: 1px solid #DFE0EB;
            label{
                display:block;
                font-size:16px;
                color:#9FA2B4;
                margin-top:32px;
                text-align:center;
                font-family:Mulish;
            }
            span{
                display:block;
                font-size:24px;  
                margin-top:6px; 
                text-align:center; 
                font-family:Mulish;        
            }
        }
    }
`

export const Listagem = Styled.ul`
    list-style:none;
    margin:0;
    padding:0;
    margin-top:60px;
    li{
        height:60px;
        line-height:60px;
        border-bottom: 1px solid #DFE0EB;
        font-family:Mulish;
    }
`