import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card';
import Cart from '../../Components/Cart';
import * as S from './styled';
import NavBar from '../../Components/NavBar';
import { FaShoppingCart } from 'react-icons/fa';
import { animateScroll as scroll } from "react-scroll";
import axios from 'axios';

function Home(props){
    const [pokemons, setPokemons] = useState([]);

    async function requestPokemons(limit = 14, offset = 0){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = response.data;
        const pokemons = [];
        data.results.forEach(async(poke)=>{
            const dataPokemon = await axios.get(poke.url);
            const pokemon = filterPokemon(dataPokemon.data);
            pokemons.push(pokemon);
        });
        setPokemons(pokemons);
        return;
    }
    
    function filterPokemon(pokemon){
        const { name, weight, sprites } = pokemon;
    
        return {
            name,
            sprite_url: sprites.front_default,
            price: parseInt(weight) * 2
        }
    }

    useEffect(()=>{
        requestPokemons();
    },[]);

    return(
            <S.Container>
                <NavBar/>
                <S.ContainerShopping>
                    <S.ContainerPokes>
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