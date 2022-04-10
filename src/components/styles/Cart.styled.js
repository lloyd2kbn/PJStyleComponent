import styled from 'styled-components';
export const StyledCart=styled.div`
        display: flex;
        align-items :center ;
        background-color: #fff;
        border-radius: 15px;
        margin: 40px 0;
        padding: 60px;
        box-shadow: 0 0 10px rgba(0,0,0,0.15);
        flex-direction: ${({layout})=>{
                    return layout;
        }};
        img{
            width: 80%;
          
        }
        &>div{
            flex: 1;
            text-align: center;
        }
        @media (max-width:${({theme})=>theme.mobile}){
                flex-direction: column;
    }
`