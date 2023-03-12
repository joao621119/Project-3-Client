import styled from "styled-components";

export const StyledForm = styled.form`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center; 
text-align: center;

label{
    font-size: 2rem;
    color: #444947;
    font-weight: 700;
    margin: 2vh 2vw;
}

input {
    font-size: 2rem;
    border-radius: 10px;
    border: 1px solid #FA7373;
    width: 30vw;
}

button {
    font-size: 1.5rem;
    margin: 3vh 2vw;
}

`