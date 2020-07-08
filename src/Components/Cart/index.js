import React, { useEffect } from 'react';
import * as S from './styled';

function Cart(props) {

  useEffect(()=>{

  }, [props]);

  return (
    <S.Container>
      <S.Title>Lista de Compras</S.Title>
      <S.List>
        {
          props.list.map((item) => {
            return (
              <S.ListItem key={String(item.id + (Math.random()*100)) }>
                <S.ItemImage src={item.sprite_url}></S.ItemImage>
                <S.ItemDescription>
                  <p>{item.name}</p>
                  <p>Preço: {item.price}</p>
                </S.ItemDescription>
              </S.ListItem>
            )
          })
        }
      </S.List>
      <S.Title>Total: $ {props.total}</S.Title>
      <S.Button>Finalizar Compra</S.Button>
    </S.Container>
  );
}

export default Cart;