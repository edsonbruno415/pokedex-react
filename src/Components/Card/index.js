import React from 'react';
import * as S from './styled';

function Card(props) {
    return (
        <S.Container>
            <S.Image src={props.pokemon.sprite_url} alt="Pokemon" ></S.Image>
            <S.ContainerDescription>
                <S.Title>{props.pokemon.name}</S.Title>
                <S.Description>{props.pokemon.price}</S.Description>
            </S.ContainerDescription>
            <S.Button>Adicionar</S.Button>
        </S.Container>
    );
}

export default Card;