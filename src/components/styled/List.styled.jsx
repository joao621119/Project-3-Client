import styled from "styled-components";

export const ListSection = styled.section`
  margin-top: 2vh;
  height: 70vh;
  background-color: #f9f1f0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListContainer = styled.div`
  width: 80%;
  margin-top: 5vh;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #dcdcdc;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-right: 2rem;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ItemName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const ItemDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const ItemPrice = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
`;
