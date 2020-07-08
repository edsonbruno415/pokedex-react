import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`;

export const ContainerShopping = styled.div`
    margin: 2.8em 5em;
    display: flex;
    flex-direction: column;
`;

export const ContainerPokes = styled.div`
    flex-wrap: wrap;
    display: flex;
`;

export const ContainerList = styled.div`
    flex-wrap: wrap;
    min-width: 30%;
`;

export const CartIconFloat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  color: #FFF;
  width: 120px;
  height: 120px;
  background-color: #BCBCE2;
  border-radius: 100%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  box-shadow: 2px 2px 4px #888;
  transition: 2s;
  &: hover{
      cursor: pointer;
  }
  &: active {
    transition: 0.1s;
    color: #DDD;
    background-color: #adadce;
  }
`;