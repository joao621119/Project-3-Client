import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => (props.primary ? "#F79489" : "#F8AFA6")};
  color: white;
  border: ${(props) => (props.primary ? "1px solid #F79489" : "1px solid #FADCD9")};
  border-radius: 10px;
  height: 4.5vh;
  margin: 0rem 1rem;
  padding: 0.5rem 2rem;
  

  :hover {
    background-color: #FA7373; /* ${(props) => (props.primary ? "#FADCD9" : "#F6E8E8")} */
    border: ${(props) => (props.primary ? "1px solid #F79489" : "1 px solid #FADCD9")};
  }
`;
