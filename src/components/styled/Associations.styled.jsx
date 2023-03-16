import styled from "styled-components";

export const StyledAssociations = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f1f0;
  padding: 2rem;
  margin-top: 5rem;

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
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease-in-out;
    }

    & > img:hover {
      transform: scale(1.1);
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    }
  }
  .associationInfo{
    text-align: center;
    max-width: 60vw;
    font-size: 1rem;
  }

  & > div:last-of-type {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 800px;
    border:

    & > h2 {
      color: #f79489;
      margin: 0.5rem 0;
      font-size: 2rem;
      font-weight: 700;
    }

    & > hr {
      border: none;
      height: 1px;
      background-color: #f79489;
      width: 100%;
      margin: 2rem 0;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      margin-bottom: 2rem;

   

      & > p {
        color: #333;
        margin-bottom: 1rem;
        font-size: 1.2rem;
        line-height: 1.5;
        font-weight: 400;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    & > p {
      color: #333;
      margin-top: 2rem;
      font-size: 1.2rem;
      line-height: 1.5;
      font-weight: 400;
    }

    & > a {
      display: inline-block;
      background-color: #f79489;
      color: #fff;
      font-size: 1.2rem;
      font-weight: 700;
      text-align: center;
      padding: 0.8rem 1.5rem;
      border-radius: 0.5rem;
      margin-top: 2rem;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        background-color: #e9796f;
      }
    }
  }

  @media (min-width: 600px) {
    & > div {
      max-width: 600px;
    }
  }
`;