import React from 'react';
import { FaSearch } from 'react-icons/fa';
import * as S from './styled';

export default class NavBar extends React.Component {
  render() {
    return (
      <>
        <S.Nav>
          <S.NavItem>
            <S.NavTitle>
              PokeStore
            </S.NavTitle>
          </S.NavItem>
          <S.NavSearch>
            <S.CartIcon><FaSearch/></S.CartIcon>
            <S.InputSearch type="search" placeholder="Buscar Pokémon" />
          </S.NavSearch>
        </S.Nav>
      </>
    );
  }
}