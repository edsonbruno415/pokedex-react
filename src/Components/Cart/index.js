import React from 'react';
import * as S from './styled';
import photo from '../../Images/ditto.png';

class Cart extends React.Component{
  render(){
    return(
      <S.Container>
        <S.Title>Lista de Compras</S.Title>
        <S.List>
          <S.ListItem>
          <S.ItemImage src={photo}></S.ItemImage>
          <S.ItemDescription>
            <p>Ditto</p>
            <p>Preço: $200</p>
          </S.ItemDescription>
          </S.ListItem>
          <S.ListItem>
          <S.ItemImage src={photo}></S.ItemImage>
          <S.ItemDescription>
            <p>Ditto</p>
            <p>Preço: $200</p>
          </S.ItemDescription>
          </S.ListItem>
        </S.List>
        <S.Title>Total: $1248</S.Title>
        <S.Button>Finalizar Compra</S.Button>
      </S.Container>
    );
  }
}

export default Cart;