import styled from 'styled-components';
export const PetListSection = styled.section`
  margin-top: 2vh;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;


  & > * {
    width: 100%;
    max-width: 1200px;
  }


  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    padding: 0;
    margin: 0;
  }

  li {
    background-color: #F8AFA6;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
  }

  a {
    display: block;
    text-decoration: none;
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }

  .pet-info {
    padding: 1rem;
    background-color: #FADCD9;
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
    color: #F79489;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.2rem;
    color: #333;
  }

  button {
    display: block;
    margin: 1rem auto;
    padding: 0.5rem 1rem;
 /*    background-color: #F79489; */
    color: white;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #F8AFA6;
    }
  }

  @media (max-width: 600px) {
    padding: 1rem;

    ul {
      grid-template-columns: 1fr;
      grid-gap: 1rem;
    }

    li {
      margin-bottom: 1rem;
    }
  }
`;