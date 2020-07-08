import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  background-color: #bcbce2;
  justify-content: space-around;
`;

export const NavTitle = styled.h1`
  font-size: 1.8rem;
  color: #eab998;
  text-shadow: 1px 1px 2px #555;
`;

export const NavItem = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-around;
`;

export const NavSearch = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartIcon = styled.span`
  font-size: 1.4rem;
  color: #FFF;
`

export const InputSearch = styled.input`
  margin-left: 0.4em;
  font-size: 1.2rem;
  color: #444;
  padding: 0.4em 0.4em;
  padding-left: 1em;
  border: #FFF 1px solid;
  border-radius: 25px; 
`;