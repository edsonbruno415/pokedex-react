import styled from 'styled-components';

export const Title = styled.h4`
    color: #BCF;
    font-family: sans-serif;
    text-align: center;
    margin: 0.5em;
`;

export const Description = styled.p`
    margin: 0.5em;
    paddding: 0.5em;
    text-align: justify;
    font-size: 16px;
    color: blue;
`;

export const Button = styled.div`
    width: 100%;
    padding: 0.8em 0;
    text-align: center;
    background-color: #CCE;
    border-bottom-left-radius: 25px;
    transition: 1.5s; 
    &: hover{
        cursor: pointer; 
    }
    &: active {
        color: #FFF;
        background-color:#adadce;
        transition: 0.1s; 
    }
`;

export const Image = styled.img`
    width: 100%;
`;

export const Container = styled.div`
    width: 14rem;
    margin: 20px 10px;
    display: flex;
    flex-direction: column;
    border: 1px solid #CCE;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 25px;
    flex-grow: 0;
`;

export const ContainerDescription = styled.div`
    width: 100%;
    padding: 0.2em;
`;