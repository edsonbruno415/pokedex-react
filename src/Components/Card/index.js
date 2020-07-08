import React from 'react';
import * as S from './styled';

function Card(props) {
    return (
        <S.Container>
            <S.Image src={props.sprite_url} alt="Pokemon" ></S.Image>
            <S.ContainerDescription>
                <S.Title>{props.name}</S.Title>
                <S.Description>$ {props.price}</S.Description>
            </S.ContainerDescription>
            <S.Button onClick={(e) => props.click(props)}>Adicionar</S.Button>
        </S.Container>
    );
}

export default Card;