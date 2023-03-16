import styled from "styled-components";

export const StyledSearch = styled.div`
display: flex
justify-content: center;

  #searchPosition {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background: linear-gradient(135deg, #F9F1F0, #FADCD9, #F8AFA6);
  border-radius: 10px;
  margin: 5vh 0vw;
  width: 80%;
  max-width: 500px;
  border: 1px solid #FA7373;
  }

  h4 {
    margin-bottom: 10px;
    color: #F79489;
    font-weight: bold;
    font-size: 2rem;
    text-align: center;
  }

  label {
    color: #F8AFA6;
    font-size: 18px;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 2rem;
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: 1.5rem;
    color: white;
    background-color: #F8AFA6;

    &:focus {
      outline: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
