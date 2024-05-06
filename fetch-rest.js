const pokeContainer = document.querySelector('.pokemon-container')

function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/${id}/`);
    .then(res=>res.json())
    .then(data=> console.log(data))
}
function fetchPokemons(number){
    for(let i=1;i<= number;i++){
        fetchPokemon(i);
    }
}
function createPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

//Los sprite son una clase de mapa de bits, se crean en la pantalla de un ordenador apartir de un dibujo inicial utilizando un hardware gráfico especial
    const spriteContainer= document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite= document.createElement('img');
    sprite.src= pokemon.sprites.front_default
    spriteContainer.appendChild(sprite)

}