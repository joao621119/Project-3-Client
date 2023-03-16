import styled from "styled-components";
import { Typography } from "@mui/material";
import { StyledButton } from "./Button.styled";

export const StyledProfile = styled.section`
  /* Entire section */
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(#fadcd9, #f9f1f0);
  padding: 2rem;

  & > div {
    margin: 2rem 0;
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
      border: 3px solid #f79489;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); /* Add a shadow */
      transition: all 0.3s ease-in-out; /* Add a transition effect */
    }

    & > img:hover {
      transform: scale(1.1); /* Add a hover effect */
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5); /* Change the shadow on hover */
    }
  }

  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > h4 {
      color: #f79489;
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

export const StyledForAdoption = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  .petImg {
    height: 100%;
    max-height: 300px;
    width: auto;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    background-color: #fadcd9;
    border-radius: 0.5rem;
    padding: 2rem;
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

      & > ${StyledButton} {
        margin-top: 1rem;
      }
    }

    @media (min-width: 600px) {
      & > div {
        max-width: 600px;
      }
    }
  }
`;
