import React from 'react';
import pokemon from '../../Images/ditto.png';
import * as S from './styled';

class Card extends React.Component{
    render(){
        return(
            <S.Container>
                <S.Image src={pokemon} alt="Pokemon" ></S.Image>
                <div>
                    <S.Title>Ditto</S.Title>
                    <S.Description>Ditto is a beautyfull pokemon.</S.Description>
                </div>
                <S.Button>Adicionar</S.Button>
            </S.Container>
        );
    }
}

export default Card;