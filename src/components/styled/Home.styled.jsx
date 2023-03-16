import styled from "styled-components";

export const StyledHome = styled.div`
  padding: 0;
  margin: 0;

  font-size: 4em;
  /*  background-image: url("https://www.azpetvet.com/wp-content/uploads/22The-Right-Pet-For-You22.jpeg"); */
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  text-align: center;
  color: #f79489;

  #main-title {
 
  margin: 25vh 0;
  text-align: center;
}

#main-title h1 {
  color: white;
  font-size: 10rem;
  font-weight: bold;
  margin-bottom: 5rem;
  text-shadow: -10px 10px 0px #dba152, -20px 20px 0px #fa7373,
    -30px 30px 0px rgb(246, 232, 232);
  transition: all ease-in-out 250ms;
}

#main-title h1:hover {
  transform: scale(1.1);
}

#main-title p {
  color: #FA7373;
  font-size: 3rem;
  font-weight: bold;
  transition: all ease-in-out 250ms;
}

#main-title p:hover {
  color: white;
}
`;
