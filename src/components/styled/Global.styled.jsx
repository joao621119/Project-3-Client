import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

*{
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
}

html {
    font-size: 10px;
}

body{
    padding: 0;
    margin: 0;
    background-image: linear-gradient(#FADCD9, #FADCD9);
}

#homediv{
    display: flex;
    justify-content: center;
    font-size: 4em;
    color: pink;
    height: 500px
}

#footertag{
    display: flex;
    color: white;
    font-size: 2em;
    justify-content: space-between;
}

#footertag > div{
    align-items: center;
    width: 250px; 
}

.pageh1{
    color: #FA7373;
}

a{
    text-decoration: none;
}

button{
    text-decoration: none;
}

Link {
    text-decoration: none;
    color: white;
}

`;
