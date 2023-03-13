import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  label {
    color: #444947;
    margin: 2vh 2vw;
  }

  input {
    font-size: 2rem;
    border-radius: 10px;
    border: 1px solid #fa7373;
    width: 30vw;
  }

  button {
    margin: 3vh 2vw;
  }

  #radioBtnContainer {
    padding-top: 1.5vh;
  }
`;
