import React from 'react';
import * as S from './styled';

class Searchbar extends React.Component{
    render(){
        return(
            <S.ContainerBar>
                <S.Bar 
                className="searchBar" 
                placeholder="Digite o nome do pokémon"
                />
            </S.ContainerBar>          
        );
    }
}

export default Searchbar;