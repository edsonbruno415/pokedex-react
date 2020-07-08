import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0.6em;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: #adadcc;
  text-align: center;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  border: #CCE 1px solid;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
`;

export const ItemImage = styled.img`
  width: 120px;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export const Button = styled.span`
  background-color: #CCE;
  color: #000;
  font-size: 1.6rem;
  padding: 0.4em;
  text-align: center;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  transition: 1s;
  &: hover{
    cursor: pointer; 
  }
  &: active {
    color: #FFF;
    background-color:#adadce;
    transition: 0.1s; 
  }
`;