import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card';
import Cart from '../../Components/Cart';
import * as S from './styled';
import NavBar from '../../Components/NavBar';
import { FaShoppingCart } from 'react-icons/fa';
import { animateScroll as scroll } from "react-scroll";
const pokeapi = require('../../service/pokeapi');

function Home(props){
    const [total, setTotal ] = useState(0);
    const [cartList, setCartList] = useState([]);
    const [pokemons, setPokemons] = useState([]);

    async function loadPokemons(){
        const pokemonsApi = await pokeapi({});
        setPokemons(pokemonsApi);
        return;
    }

    function clickItem(item){
        const list = cartList;
        list.push(item);
        setCartList(list);
        calcularTotal();
    }

    function calcularTotal(){
        const valorTotal = cartList.reduce((acc, curr)=>{
            return acc + parseInt(curr.price)
        },0);
        setTotal(valorTotal);
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
                                key={String(poke.id)}
                                id={String(poke.id)}
                                name={poke.name}
                                price={poke.price}
                                sprite_url={poke.sprite_url}
                                click={clickItem}
                               />
                           ); 
                        })}
                    </S.ContainerPokes>
                    <S.ContainerList>
                        <Cart
                        list={cartList}
                        total={total}
                        />
                    </S.ContainerList>
                </S.ContainerShopping>
                <S.CartIconFloat onClick={()=> scroll.scrollToBottom()}>
                    <FaShoppingCart/>
                </S.CartIconFloat>
            </S.Container>
    );
}

export default Home;