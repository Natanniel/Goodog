import Styled from 'styled-components';

export const Container = Styled.section`
   padding:30px;
`

export const Titulo = Styled.span`
    font-family:MulishBold;
    font-size:24px;
`

export const UserMenu = Styled.div`
    float:right; 
    margin-top:-15px;
    div{
        display:inline-block;
        span{        
            font-size:14px;
            font-family:Mulish;
            float:right;
            height: 45px;
            margin-top:10px;
            padding-left:30px;
            line-height:45px;
            margin-right:14px;
            border-left:1px solid #DFE0EB;
        }
        div{
            height: 45px;
            width: 45px;
            padding:10px;
            border: 3px solid #DFE0EB;
            border-radius:50px;
            float:right;
            img{
                display:block;
                height: 45px;
                width: 45px;
                
            }
        }
    }
`

export const Content = Styled.section`
    background: #FFFFFF;
    border: 1px solid #DFE0EB;
    box-sizing: border-box;
    border-radius: 8px;
    margin-top:30px;
    margin-bottom:30px;
`