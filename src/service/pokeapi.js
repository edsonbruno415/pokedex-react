const axios = require('axios');

async function requestPokemons(limit = 12, offset = 0){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = response.data.results;
    const pokemonsUrl = data.map(poke => axios.get(poke.url));
    const pokemonsData = await Promise.all(pokemonsUrl);
    const pokemons = pokemonsData.map(poke => filterPokemon(poke.data));
    return pokemons;
}

function filterPokemon(pokemon){
    const { name, weight, sprites } = pokemon;

    return {
        name,
        sprite_url: sprites.front_default,
        price: parseInt(weight) * 2
    }
}


async function main(options){
    try{
        const {
            limit,
            offset
        } = options;

        const pokemons = await requestPokemons(limit, offset);
        return pokemons;
    }
    catch(err){
        console.error('Error internal:', err);
    }
}

module.exports = main;

