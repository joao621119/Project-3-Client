import styled from "styled-components";
import { Typography } from "@mui/material";
import { StyledButton } from "./Button.styled";

export const StyledUserProfile = styled.section`
text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #F9F1F0, #FADCD9, #F8AFA6);
  padding: 2rem;

 

  & > div {
    margin: 1rem 0;

  }

  & > div:first-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #F79489;
      margin-bottom: 1rem;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); 
      transition: all 0.3s ease-in-out; 
    }
    & > img:hover {
      transform: scale(1.1); 
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    }
  }

  #infoUserProfile{
    max-width: 40vw;
  }

  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > h4 {
      color: #F79489;
      margin: 0.5rem 0;
    }

    & > p {
      color: #555;
      margin: 0.5rem 0;
    }

    & > ${StyledButton} {
      margin-top: 1rem;
    }
  }

  @media (min-width: 600px) {
    & > div {
      max-width: 600px;
    }
  }
`;

export const StyledPetsForAdoption = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    background-color: #FADCD9;
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    & > a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      & > img {
        height: 100%;
        width: auto;
        margin-bottom: 1rem;
      }

      & > ${StyledButton} {
        margin-top: 1rem;
      }
    }
  }
`;