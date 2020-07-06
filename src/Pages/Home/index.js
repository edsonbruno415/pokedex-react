import React from 'react';
import SearchBar from '../../Components/SearchBar';
import Card from '../../Components/Card';
import * as S from './styled';

class Home extends React.Component{
    render(){
        return(
            <S.Container>
                <SearchBar/>
                <S.ContainerShopping>
                    <S.ContainerPokes>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </S.ContainerPokes>
                    <S.ContainerList>
                        
                    </S.ContainerList>
                </S.ContainerShopping>
            </S.Container>
        );
    }
}

export default Home;