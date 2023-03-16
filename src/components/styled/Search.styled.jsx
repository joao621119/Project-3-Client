import styled from "styled-components";
import { Typography } from "@mui/material";
import { StyledButton } from "./Button.styled";

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: #F9F1F0;
  border-radius: 10px;
  
  h2 {
    margin-bottom: 10px;
    color: #F79489;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }

  label {
    color: #F8AFA6;
    font-size: 18px;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: #FADCD9;
    background-color: #F8AFA6;

    &:focus {
      outline: none;
    }
  }
`;