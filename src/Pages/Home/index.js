import React from 'react';
import Card from '../../Components/Card';
import Cart from '../../Components/Cart';
import * as S from './styled';
import NavBar from '../../Components/NavBar';
import { FaShoppingCart } from 'react-icons/fa';
import { animateScroll as scroll } from "react-scroll";

class Home extends React.Component{
    render(){
        return(
            <S.Container>
                <NavBar/>
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
                        <Cart/>
                    </S.ContainerList>
                </S.ContainerShopping>
                <S.CartIconFloat onClick={()=> scroll.scrollToBottom()}>
                    <FaShoppingCart/>
                </S.CartIconFloat>
            </S.Container>
        );
    }
}

export default Home;