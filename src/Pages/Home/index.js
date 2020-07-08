import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card';
import Cart from '../../Components/Cart';
import * as S from './styled';
import NavBar from '../../Components/NavBar';
import { FaShoppingCart } from 'react-icons/fa';
import { animateScroll as scroll } from "react-scroll";
import pokeapi from '../../service/pokeapi';

function Home(props){
    const [pokemons, setPokemons] = useState([]);

    async function loadPokemons(){
        const pokemonsApi = await pokeapi({});
        setPokemons(pokemonsApi);
        return;
    }

    useEffect(()=>{
        loadPokemons();
    },[]);

    return(
            <S.Container>
                <NavBar/>
                <S.ContainerShopping>
                    <S.ContainerPokes>
                        { pokemons.map(poke=>{
                           return(
                            <Card
                            pokemon={poke}
                            />
                           ); 
                        })}
                    </S.ContainerPokes>
                    <S.ContainerList>
                        <Cart/>
                    </S.ContainerList>
                </S.ContainerShopping>
                <S.CartIconFloat onClick={()=> scroll.scrollToBottom()}>
                    <FaShoppingCart/>
                </S.CartIconFloat>
            </S.Container>
    );
}

export default Home;