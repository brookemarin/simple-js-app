let pokemonRepository = (function (){
    let pokemonList = [
    {name: "Squirtle", height: .5, types:['water']},
    {name: "Eevee", height: .3, types:['normal']},
    {name: "Jigglypuff", height: .5, types:['fairy','normal']}
]
    function getAll(){
        return pokemonList;
    }

    function add(pokemon){
        pokemonList.push(pokemon);
    }

    return {
        getAll: getAll,
        add, add
    };


})();

pokemonRepository.getAll().forEach(pokemon => document.write(`<p> name: ${pokemon.name}, height: ${pokemon.height}, types: ${pokemon.types} </p>`));
