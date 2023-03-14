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
    background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/74567b80-0277-4fc8-bb58-06e36bf2de95/d4r7cra-ecc28ba2-e401-4386-a065-e995ad61f28c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc0NTY3YjgwLTAyNzctNGZjOC1iYjU4LTA2ZTM2YmYyZGU5NVwvZDRyN2NyYS1lY2MyOGJhMi1lNDAxLTQzODYtYTA2NS1lOTk1YWQ2MWYyOGMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9XhEr_znQPhfC0-NBQjaSvKv7B-N9UajKxp7Z7wbz0w");
    background-repeat: no-repeat;
    background-size: cover;
    height: 500px
}
`;
