import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0.6em;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  text-align: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  border: 1px solid #000;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export const ItemImage = styled.img`
  width: 100%;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;