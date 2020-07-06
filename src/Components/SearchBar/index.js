import React from 'react';
import * as S from './styled';

class Searchbar extends React.Component{
    render(){
        return(
            <div>
                <S.Bar 
                className="searchBar" 
                placeholder="Digite o nome do pokémon"
                />
            </div>
            
        );
    }
}

export default Searchbar;