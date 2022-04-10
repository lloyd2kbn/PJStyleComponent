import {createGlobalStyle} from "styled-components";
const GlobalStyles=createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;700&display=swap');
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    
}
body{ 
    color: hsl(192,100%,9%);
    background-color: ${({theme})=>{
                return theme.colors.body
    }};
}
p{
    opacity: 0.6;
    line-height: 1.5;
}
img{
    max-width: 100%;
}
`
export default GlobalStyles;
