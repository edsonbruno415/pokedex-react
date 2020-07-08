import React from 'react';
import * as S from './styled';

function Card(props) {
    return (
        <S.Container>
            {props}
            <S.Image src={props.sprite} alt="Pokemon" ></S.Image>
            <S.ContainerDescription>
                <S.Title>{props.name}</S.Title>
                <S.Description>{props.price}</S.Description>
            </S.ContainerDescription>
            <S.Button>Adicionar</S.Button>
        </S.Container>
    );
}

export default Card;