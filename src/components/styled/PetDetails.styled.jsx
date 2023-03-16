import styled from "styled-components";
import { Typography } from "@mui/material";
import { StyledButton } from "./Button.styled";

export const StyledPetDetails = styled.section`
  /* Entire section */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(#fadcd9, #f9f1f0);
  padding: 3rem;
  margin-top: 0rem;

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
      border: 3px solid #F79489;
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
      color: #F79489;
      margin: 0.5rem 0;
      font-size: 2rem;
      font-weight: 700;
    }

    & > p {
      color: #333;
      margin: 0.5rem 0;
      font-size: 1.2rem;
      line-height: 1.5;
      font-weight: 400;
    }

    & > ${StyledButton} {
      margin-top: 1rem;
      background-color: #F79489;
      color: #fff;
      font-weight: 700;
      padding: 0.8rem 2rem;
      border-radius: 1rem;
      text-transform: uppercase;
      font-size: 1.2rem;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #fff;
        color: #F79489;
        border: 2px solid #F79489;
      }
    }
  }

  @media (min-width: 600px) {
    & > div {
      max-width: 600px;
    }
  }
`;

export const StyledPetOwner = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  .petOwnerImg {
        height: 100%;
        max-height: 300px;
        width: auto;
        margin-bottom: 2rem;
      }

    div {
    display: flex;
    flex-direction: column;
    background-color: #FADCD9;
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